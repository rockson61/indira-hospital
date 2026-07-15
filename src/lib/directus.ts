import { createDirectus, rest, staticToken, DirectusClient, RestClient } from '@directus/sdk';
import { Schema } from './schema';
import { cache } from 'react';

type ClientType = DirectusClient<Schema> & RestClient<Schema>;

const globalForDirectus = globalThis as unknown as {
  directusClient: ClientType | undefined;
};

function createClient(): ClientType {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const token = process.env.DIRECTUS_TOKEN;

  // If environment variables are missing, point to a dummy disconnected local address.
  // This returns a valid SDK client instance, preventing TypeScript type errors and proxy failures,
  // while ensuring instantaneous connection failure (ECONNREFUSED) that triggers standard catch/fallback blocks.
  const targetUrl = (!apiUrl || apiUrl === 'undefined') ? 'http://127.0.0.1:9999' : apiUrl;
  const targetToken = !token ? 'dummy_token' : token;

  if (!apiUrl || apiUrl === 'undefined' || !token) {
    console.warn('[FALLBACK] Directus configuration missing. Initializing fallback client pointing to:', targetUrl);
  }

  return createDirectus<Schema>(targetUrl).with(staticToken(targetToken)).with(rest()) as ClientType;
}

export const getDirectusClient = cache(async function getDirectusClient(): Promise<ClientType> {
  if (globalForDirectus.directusClient) return globalForDirectus.directusClient;

  const client = createClient();

  if (process.env.NODE_ENV !== 'production') {
    globalForDirectus.directusClient = client;
  }
  return client;
});

export async function getAdminClient(): Promise<ClientType> {
  return await getDirectusClient();
}

