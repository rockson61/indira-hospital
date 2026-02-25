const fs = require('fs');

const existingContent = fs.readFileSync('./src/lib/data/tamilnadu-locations.ts', 'utf8');

const missingDistricts = [
    {
        name: 'Theni', slug: 'theni', district: 'Theni',
        distance: '430 km', travelTime: '7 hours',
        description: 'District headquarters surrounded by Western Ghats, gateway to Meghamalai and Suruli Falls.',
        category: 'district_hq', pincode: '625531', population: '55,000+',
        specialFeatures: ['Western Ghats', 'Cardamom', 'District HQ']
    },
    {
        name: 'Karur', slug: 'karur', district: 'Karur',
        distance: '270 km', travelTime: '4 hours 45 minutes',
        description: 'Textile city famous for home textile exports and Indias bed linen manufacturing capital.',
        category: 'district_hq', pincode: '639001', population: '76,000+',
        specialFeatures: ['Textile Capital', 'District HQ']
    },
    {
        name: 'Ariyalur', slug: 'ariyalur', district: 'Ariyalur',
        distance: '260 km', travelTime: '4 hours 30 minutes',
        description: 'District headquarters known for cement factories and fossil-rich geological formations.',
        category: 'district_hq', pincode: '621713', population: '30,000+',
        specialFeatures: ['Cement Hub', 'Fossil Deposits', 'District HQ']
    },
    {
        name: 'Ramanathapuram', slug: 'ramanathapuram', district: 'Ramanathapuram',
        distance: '480 km', travelTime: '8 hours',
        description: 'Coastal district headquarters, gateway to Rameswaram and the famous Ramanathaswamy Temple.',
        category: 'district_hq', pincode: '623501', population: '65,000+',
        specialFeatures: ['Coastal Town', 'District HQ']
    },
    {
        name: 'Tirupathur', slug: 'tirupathur', district: 'Tirupathur',
        distance: '85 km', travelTime: '1.5 hours',
        description: 'Headquarters of Tirupathur district, known for its pleasant climate and sandalwood.',
        category: 'district_hq', pincode: '635601', population: '65,000+',
        specialFeatures: ['District HQ', 'Sandalwood']
    },
    {
        name: 'Kanyakumari', slug: 'kanyakumari', district: 'Kanyakumari',
        distance: '620 km', travelTime: '10 hours',
        description: 'Southernmost tip of India, famous for its sunrise and Vivekananda Rock Memorial.',
        category: 'district_hq', pincode: '629702', population: '25,000+',
        specialFeatures: ['District HQ', 'Southern Tip']
    },
    {
        name: 'Tenkasi', slug: 'tenkasi', district: 'Tenkasi',
        distance: '520 km', travelTime: '8 hours',
        description: 'Famous for the Courtallam waterfalls and is surrounded by the Western Ghats.',
        category: 'district_hq', pincode: '627811', population: '75,000+',
        specialFeatures: ['District HQ', 'Waterfalls']
    },
    {
        name: 'Sivaganga', slug: 'sivaganga', district: 'Sivaganga',
        distance: '390 km', travelTime: '6.5 hours',
        description: 'Historic town with deep ties to the Chettinad region and freedom fighters.',
        category: 'district_hq', pincode: '630561', population: '40,000+',
        specialFeatures: ['District HQ', 'Chettinad Gateway']
    },
    {
        name: 'Thoothukudi', slug: 'thoothukudi', district: 'Thoothukudi',
        distance: '540 km', travelTime: '8.5 hours',
        description: 'Port city and district headquarters, famously known as the Pearl City of India.',
        category: 'district_hq', pincode: '628001', population: '250,000+',
        specialFeatures: ['District HQ', 'Port City', 'Pearl City']
    },
    {
        name: 'Virudhunagar', slug: 'virudhunagar', district: 'Virudhunagar',
        distance: '430 km', travelTime: '7 hours',
        description: 'Industrial hub known for its hardware, fireworks, and matchbox industries.',
        category: 'district_hq', pincode: '626001', population: '75,000+',
        specialFeatures: ['District HQ', 'Industrial Hub']
    },
    {
        name: 'Tiruvarur', slug: 'tiruvarur', district: 'Tiruvarur',
        distance: '330 km', travelTime: '6 hours',
        description: 'District headquarters known for the ancient Thyagaraja Temple and chariot festival.',
        category: 'district_hq', pincode: '610001', population: '60,000+',
        specialFeatures: ['District HQ', 'Temple City']
    },
    {
        name: 'Nagapattinam', slug: 'nagapattinam', district: 'Nagapattinam',
        distance: '350 km', travelTime: '6.5 hours',
        description: 'Coastal district HQ, home to important port infrastructure and historic shrines.',
        category: 'district_hq', pincode: '611001', population: '100,000+',
        specialFeatures: ['District HQ', 'Port City']
    },
    {
        name: 'Mayiladuthurai', slug: 'mayiladuthurai', district: 'Mayiladuthurai',
        distance: '310 km', travelTime: '5.5 hours',
        description: 'District headquarters famous for ancient Chola temples along the Cauvery river.',
        category: 'district_hq', pincode: '609001', population: '85,000+',
        specialFeatures: ['District HQ', 'Temple Town']
    },
    {
        name: 'Perambalur', slug: 'perambalur', district: 'Perambalur',
        distance: '250 km', travelTime: '4.5 hours',
        description: 'District headquarters in central Tamil Nadu, known for its agriculture and peaceful environment.',
        category: 'district_hq', pincode: '621212', population: '50,000+',
        specialFeatures: ['District HQ', 'Central TN']
    }
];

let addedCount = 0;
let newContent = existingContent;

// Remove the trailing bracket to append
newContent = newContent.replace(/];[\s\S]*$/, "");

for (const loc of missingDistricts) {
    if (!existingContent.includes(`slug: '${loc.slug}'`)) {
        newContent += `
    {
        name: '${loc.name}',
        slug: '${loc.slug}',
        district: '${loc.district}',
        distance: '${loc.distance}',
        travelTime: '${loc.travelTime}',
        description: '${loc.description.replace(/'/g, "\\'")}',
        category: '${loc.category}',
        pincode: '${loc.pincode}',
        population: '${loc.population}',
        transportOptions: { bus: true, train: true, auto: true, taxi: true },
        specialFeatures: ${JSON.stringify(loc.specialFeatures)},
    },`;
        addedCount++;
    }
}

newContent += `
];

// Helper functions
export function getTamilNaduLocationBySlug(slug: string): TamilNaduLocation | undefined {
    return tamilNaduLocations.find(loc => loc.slug === slug);
}

export function getLocationsByDistrict(district: string): TamilNaduLocation[] {
    return tamilNaduLocations.filter(loc =>
        loc.district.toLowerCase() === district.toLowerCase()
    );
}
`;

fs.writeFileSync('./src/lib/data/tamilnadu-locations.ts', newContent);
console.log(`Added ${addedCount} missing districts.`);
