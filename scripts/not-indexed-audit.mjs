import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const XLSX = require('xlsx');

const FILE_PATH = '/Users/rockson61/Downloads/Not index.xlsx';

async function analyzeNotIndexed() {
    console.log('🔍 RockSEO: Reading Excluded URLs (Not index.xlsx)...');

    if (!fs.existsSync(FILE_PATH)) {
        console.error(`❌ ERROR: File not found at ${FILE_PATH}`);
        return;
    }

    try {
        const workbook = XLSX.readFile(FILE_PATH);
        const sheetNames = workbook.SheetNames;
        console.log(`📑 Sheets found: ${sheetNames.join(', ')}`);

        // Find the sheet with data (usually 'Pages' or 'Details' or 'Table')
        let targetSheetName = sheetNames.find(n => n.includes('Page') || n.includes('Table') || n.includes('Detail')) || sheetNames[1] || sheetNames[0];
        
        console.log(`🎯 Targeted Sheet: ${targetSheetName}`);
        const sheet = workbook.Sheets[targetSheetName];
        const data = XLSX.utils.sheet_to_json(sheet);

        console.log(`✅ Loaded ${data.length} rows from ${targetSheetName}.`);
        
        if (data.length > 0) {
            console.log('--- 🔎 DEBUG: Row Structure ---');
            console.log(JSON.stringify(data[0], null, 2));
        }

        const reports = [];
        for (const row of data) {
            // Flexible column detection for URL
            const url = row.URL || row['Excluded URLs'] || row['Address'] || row['Top pages'] || Object.values(row).find(v => typeof v === 'string' && v.startsWith('http'));
            
            if (url) {
                reports.push({
                    url,
                    reason: row.Reason || row['Reason'] || row['Status'] || 'Excluded',
                    impressions: row.Impressions || 0,
                    lastCrawled: row['Last crawled'] || 'N/A'
                });
            }
        }

        if (reports.length === 0) {
            console.warn('⚠️ No URLs found. Trying ALL sheets...');
            for (const sName of sheetNames) {
                const sData = XLSX.utils.sheet_to_json(workbook.Sheets[sName]);
                const found = sData.find(r => Object.values(r).some(v => typeof v === 'string' && v.startsWith('http')));
                if (found) {
                    console.log(`💡 Found URLs in sheet: ${sName}`);
                    // Re-run for this sheet if needed
                }
            }
        }

        console.table(reports.slice(0, 50));

        // Save for processing
        const outputPath = '/Users/rockson61/Downloads/Indira Hospital/.seo/reports/not_indexed.json';
        fs.writeFileSync(outputPath, JSON.stringify(reports, null, 2));
        console.log(`📝 Exported to ${outputPath}`);

    } catch (err) {
        console.error(`❌ XLSX Parse Error: ${err.message}`);
    }
}

analyzeNotIndexed();
