import 'dotenv/config';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

async function test() {
    console.log("Testing API functions...");
    // Dynamic import to ensure env is loaded before modules are evaluated
    const { getDoctors, getDepartments, getFAQs } = await import('../src/lib/api');

    try {
        console.log("Fetching Doctors...");
        const doctors = await getDoctors();
        console.log(`Success! Found ${doctors.length} doctors.`);

        console.log("Fetching Departments...");
        const depts = await getDepartments();
        console.log(`Success! Found ${depts.length} departments.`);

        console.log("Fetching FAQs...");
        const faqs = await getFAQs();
        console.log(`Success! Found ${faqs.length} FAQs.`);

    } catch (e: any) {
        console.error("API Test Failed:", e);
        if (e.errors) console.error(JSON.stringify(e.errors, null, 2));
    }
}

test();
