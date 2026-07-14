import { createDirectus, rest, staticToken, DirectusClient, RestClient } from '@directus/sdk';
import { Schema } from './schema';
import { cache } from 'react';

type ClientType = DirectusClient<Schema> & RestClient<Schema>;

const globalForDirectus = globalThis as unknown as {
  directusClient: ClientType | undefined;
};

function createClient(): ClientType {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl || apiUrl === 'undefined') {
    throw new Error('NEXT_PUBLIC_API_URL is not defined. Please set it in your environment.');
  }

  const token = process.env.DIRECTUS_TOKEN;
  if (!token) {
    throw new Error('DIRECTUS_TOKEN is not defined. Please set a static access token in your environment.');
  }

  return createDirectus<Schema>(apiUrl).with(staticToken(token)).with(rest()) as ClientType;
}

export const getDirectusClient = cache(async function getDirectusClient(): Promise<ClientType> {
  if (globalForDirectus.directusClient) return globalForDirectus.directusClient;

  const client = createClient();

  if (process.env.NODE_ENV !== 'production') {
    globalForDirectus.directusClient = client;
  }
  return client;
});

export async function getAdminClient() {
  return await getDirectusClient();
}
