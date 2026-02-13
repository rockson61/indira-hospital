import { createDirectus, rest, authentication, staticToken, DirectusClient, RestClient, AuthenticationClient } from '@directus/sdk';
import { Schema } from './schema';

type ClientType = DirectusClient<Schema> & RestClient<Schema> & AuthenticationClient<Schema>;

const globalForDirectus = globalThis as unknown as {
    directusPromise: Promise<ClientType> | undefined;
};

const createDirectusConfig = () => {
    const directus = createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL as string)
        .with(authentication('json', { autoRefresh: true }))
        .with(rest());

    return directus as ClientType;
}

const createStaticClient = (token: string) => {
    return createDirectus<Schema>(process.env.NEXT_PUBLIC_API_URL as string)
        .with(staticToken(token))
        .with(rest()) as ClientType;
}

// Global promise singleton
let clientPromise: Promise<ClientType> | null = globalForDirectus.directusPromise || null;

export async function getDirectusClient() {
    if (clientPromise) return clientPromise;

    // PREFER STATIC TOKEN FROM ENV (Fixed for Build Process)
    if (process.env.DIRECTUS_TOKEN) {
        clientPromise = Promise.resolve(createStaticClient(process.env.DIRECTUS_TOKEN));
    } else {
        // Fallback to dynamic login (Dev mode)
        clientPromise = (async () => {
            const client = createDirectusConfig();
            try {
                await client.login({ email: process.env.ADMIN_EMAIL as string, password: process.env.ADMIN_PASSWORD as string });
            } catch (e) {
                console.error("Login failed", e);
            }
            return client;
        })();
    }

    if (process.env.NODE_ENV !== 'production') {
        globalForDirectus.directusPromise = clientPromise;
    }
    return clientPromise;
}

export async function getAdminClient() {
    return await getDirectusClient();
}
