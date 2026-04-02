import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CONFIG
const KEY_FILE = path.join(__dirname, '../.seo/credentials/service-account.json');
const PROPERTY_URL = 'https://www.indirasuperspecialityhospital.com/';

async function syncPerformance() {
    console.log('🚀 RockSEO: Fetching Search Console Performance Data...');

    if (!fs.existsSync(KEY_FILE)) {
        console.error('❌ ERROR: Missing Service Account JSON at .seo/credentials/service-account.json');
        return;
    }

    const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    try {
        const res = await searchconsole.searchanalytics.query({
            siteUrl: PROPERTY_URL,
            requestBody: {
                startDate: '2026-03-01',
                endDate: '2026-04-01',
                dimensions: ['query', 'page'],
                rowLimit: 1000,
            },
        });

        const rows = res.data.rows || [];
        console.log(`📊 Retrieved ${rows.length} high-intent queries.`);

        // Save to .seo/reports
        const reportPath = path.join(__dirname, '../.seo/reports/perf-latest.json');
        fs.writeFileSync(reportPath, JSON.stringify(rows, null, 2));
        
        console.log(`✅ Performance Report saved to: ${reportPath}`);

    } catch (err) {
        console.error(`❌ GSC Sync FAILED: ${err.message}`);
    }
}

syncPerformance();
