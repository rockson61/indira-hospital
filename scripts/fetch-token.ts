import { createDirectus, authentication, rest } from '@directus/sdk';
import 'dotenv/config';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function getToken() {
    const client = createDirectus(process.env.NEXT_PUBLIC_API_URL as string)
        .with(authentication('json'))
        .with(rest());

    try {
        const response = await client.login({
            email: process.env.ADMIN_EMAIL as string,
            password: process.env.ADMIN_PASSWORD as string
        });

        // Output to file to avoid stdout pollution
        if (response.access_token) {
            fs.writeFileSync('.token', response.access_token);
            console.log("Token written to .token");
        } else {
            console.error("No access token received");
            process.exit(1);
        }
    } catch (e) {
        console.error("Auth failed", e);
        process.exit(1);
    }
}

getToken();
