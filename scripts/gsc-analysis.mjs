import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const FILE_PATH = '/Users/rockson61/Downloads/ISHSC.xlsx';

async function analyzeXLSX() {
    console.log('🔍 RockSEO: Reading GSC Export (ISHSC.xlsx)...');

    if (!fs.existsSync(FILE_PATH)) {
        console.error(`❌ ERROR: File not found at ${FILE_PATH}`);
        return;
    }

    try {
        const workbook = XLSX.readFile(FILE_PATH);
        const sheetNames = workbook.SheetNames;
        console.log(`📑 Sheets found: ${sheetNames.join(', ')}`);

        // Extract Queries (Sheet 1)
        const queriesSheet = workbook.Sheets['Queries'] || workbook.Sheets[sheetNames[0]];
        const queries = XLSX.utils.sheet_to_json(queriesSheet);

        // Extract Pages (Sheet 2)
        const pagesSheet = workbook.Sheets['Pages'] || workbook.Sheets[sheetNames[1]];
        const pages = XLSX.utils.sheet_to_json(pagesSheet);

        console.log(`✅ Loaded ${queries.length} Queries and ${pages.length} Pages.`);

        // Sort and Map Queries
        const topQueries = queries
            .sort((a, b) => (b.Impressions || 0) - (a.Impressions || 0))
            .slice(0, 50);

        console.log('\n--- TOP 20 SEARCH QUERIES (BY IMPRESSIONS) ---');
        console.table(topQueries.slice(0, 20).map(q => ({
            Query: q['Top queries'] || q.Query || q['Query'],
            Impressions: q.Impressions,
            Clicks: q.Clicks,
            CTR: q.CTR,
            Position: q.Position
        })));

        // Filter Queries: Position 11-20 (Low hanging fruit)
        const growthGaps = queries
            .filter(q => q.Position >= 10 && q.Position <= 25)
            .sort((a, b) => (b.Impressions || 0) - (a.Impressions || 0))
            .slice(0, 15);

        console.log('\n--- 🎯 GROWTH GAPS (POS 10-25) ---');
        console.log('These keywords have high impressions but are stuck on Page 2:');
        console.table(growthGaps.map(q => ({
            Query: q['Top queries'] || q.Query,
            Impressions: q.Impressions,
            Pos: q.Position.toFixed(1)
        })));

        // Output to JSON for further use
        const output = {
            topQueries,
            growthGaps,
            totalQueries: queries.length
        };
        
        const reportPath = '/Users/rockson61/Downloads/Indira Hospital/.seo/reports/gsc_insight.json';
        fs.mkdirSync('/Users/rockson61/Downloads/Indira Hospital/.seo/reports', { recursive: true });
        fs.writeFileSync(reportPath, JSON.stringify(output, null, 2));

    } catch (err) {
        console.error(`❌ XLSX Parse Error: ${err.message}`);
    }
}

analyzeXLSX();
