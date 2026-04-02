import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIG: Path to your Google Service Account JSON
const KEY_FILE = path.join(__dirname, '../.seo/credentials/service-account.json');
const INDEX_STATE_FILE = path.join(__dirname, '../.seo/reports/indexing-state.json');

// LOAD ROUTES: We will index the Vellore routes first (the 190+ heart of the strategy)
const ROUTES_DIR = path.join(__dirname, '../src/lib/data/seo-keywords.ts');

async function runIndexing() {
    console.log('🚀 RockSEO: Starting Google Indexing API Sync...');

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ ERROR: Missing Service Account JSON at .seo/credentials/service-account.json');
        console.log('Please follow the walkthrough to create one.');
        return;
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const indexing = google.indexing({ version: 'v3', auth });

    // For now, let's pull the Vellore slugs as a test batch
    // In production, we'll iterate through all 3,700
    const baseUrl = 'https://www.indirasuperspecialityhospital.com/doctor/near-me/vellore/';
    
    // Simulating batching (API limit is usually 200/day)
    const routesToSubmit = [
        'best-piles-hospital',
        'piles-laser-surgery',
        'gall-bladder-surgery',
        'ivf-treatment-hospital',
        'hair-transplant-surgery'
    ];

    for (const slug of routesToSubmit) {
        const url = `${baseUrl}${slug}`;
        try {
            console.log(`📡 Submitting: ${url}`);
            const res = await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: 'URL_UPDATED',
                },
            });
            console.log(`✅ Success: ${res.statusText}`);
        } catch (err) {
            console.error(`❌ FAILED: ${url} - ${err.message}`);
        }
    }

    console.log('\n🌟 RockSEO: Batch indexing complete. Check Search Console in 24h.');
}

runIndexing();
