// Enhanced location data with comprehensive amenities for all major Vellore locations
// This data can be used to generate rich, detailed location pages

export interface EnhancedLocationData {
 name: string
 slug: string
 taluk: string
 pincode: string
 district: string
 state: string
 latitude?: number
 longitude?: number
 distance: string
 travelTime: string
 description: string
 population?: string
 category: 'city' | 'district_hq' | 'major_town' | 'town' | 'village' | 'industrial' | 'historic'
 amenities: {
 banks: Array<{ name: string; distance: string; address: string }>
 atms: Array<{ name: string; distance: string; address: string }>
 postOffices: Array<{ name: string; distance: string; address: string }>
 hospitals: Array<{ name: string; distance: string; address: string; type: 'government' | 'private' | 'phc' }>
 shopping: Array<{ name: string; distance: string; address: string; type: 'market' | 'mall' | 'street' }>
 restaurants: Array<{ name: string; distance: string; cuisine: string }>
 hotels: Array<{ name: string; distance: string; rating?: number }>
 }
 touristPlaces: Array<{ name: string; type: 'temple' | 'fort' | 'lake' | 'park' | 'museum' | 'industrial' | 'historic'; distance?: string }>
 nearbyLocations: Array<{ name: string; distance: string; slug: string }>
 transportOptions: {
 bus: boolean
 train: boolean
 auto: boolean
 taxi: boolean
 }
 specialFeatures?: string[]
}

export const enhancedVelloreLocations: EnhancedLocationData[] = [
 {
 name: 'Arakkonam',
 slug: 'arakkonam',
 taluk: 'Arakkonam',
 pincode: '631001',
 district: 'Vellore',
 state: 'TAMIL NADU',
 latitude: 13.0839,
 longitude: 79.6718,
 distance: '35 km',
 travelTime: '45 minutes',
 description: 'Major railway junction and commercial hub in Vellore district with strong industrial presence',
 population: '78,000+',
 category: 'major_town',
 amenities: {
 banks: [
 { name: 'State Bank of India', distance: '0.5 km', address: 'Railway Station Road' },
 { name: 'Indian Bank', distance: '0.6 km', address: 'Main Road' },
 { name: 'Canara Bank', distance: '0.7 km', address: 'Bus Stand Area' },
 { name: 'ICICI Bank', distance: '0.8 km', address: 'Commercial Street' },
 ],
 atms: [
 { name: 'SBI ATM', distance: '0.2 km', address: 'Railway Station' },
 { name: 'ICICI ATM', distance: '0.3 km', address: 'Near Bus Stand' },
 { name: 'HDFC ATM', distance: '0.4 km', address: 'Main Road' },
 { name: 'Axis Bank ATM', distance: '0.5 km', address: 'Market Area' },
 ],
 postOffices: [
 { name: 'Arakkonam Head Post Office', distance: '0.8 km', address: 'Main Road' },
 { name: 'Railway Post Office', distance: '0.3 km', address: 'Station Road' },
 ],
 hospitals: [
 { name: 'Government Hospital Arakkonam', distance: '1.2 km', address: 'Hospital Road', type: 'government' },
 { name: 'Primary Health Center', distance: '0.9 km', address: 'Medical Street', type: 'phc' },
 { name: 'Apollo Clinic', distance: '1.5 km', address: 'Main Road', type: 'private' },
 ],
 shopping: [
 { name: 'Arakkonam Market', distance: '0.4 km', address: 'Bazaar Street', type: 'market' },
 { name: 'Commercial Street Shops', distance: '0.5 km', address: 'Commercial Area', type: 'street' },
 { name: 'Shopping Complex', distance: '0.8 km', address: 'Near Bus Stand', type: 'mall' },
 ],
 restaurants: [
 { name: 'Hotel Saravana Bhavan', distance: '0.6 km', cuisine: 'South Indian' },
 { name: 'Ananda Bhavan', distance: '0.5 km', cuisine: 'Vegetarian' },
 { name: 'Selvam Mess', distance: '0.4 km', cuisine: 'Non-Veg' },
 ],
 hotels: [
 { name: 'Hotel Arakkonam Residency', distance: '0.7 km', rating: 3 },
 { name: 'Hotel Grand', distance: '0.9 km', rating: 3 },
 ],
 },
 touristPlaces: [
 { name: 'Arakkonam Fort', type: 'historic', distance: '1 km' },
 { name: 'Sri Ranganathaswamy Temple', type: 'temple', distance: '1.5 km' },
 { name: 'Vedanthangal Bird Sanctuary', type: 'park', distance: '35 km' },
 { name: 'INS Rajali Naval Base', type: 'industrial', distance: '5 km' },
 ],
 nearbyLocations: [
 { name: 'Sholingur', distance: '15 km', slug: 'sholingur' },
 { name: 'Walajapet', distance: '25 km', slug: 'walajapet' },
 { name: 'Kanchipuram', distance: '40 km', slug: 'kanchipuram' },
 { name: 'Vellore', distance: '35 km', slug: 'vellore' },
 { name: 'Chennai', distance: '75 km', slug: 'chennai' },
 ],
 transportOptions: {
 bus: true,
 train: true,
 auto: true,
 taxi: true,
 },
 specialFeatures: ['Railway Junction', 'Industrial Area', 'Naval Base Nearby', 'Good Connectivity'],
 },
 {
 name: 'Arcot',
 slug: 'arcot',
 taluk: 'Arcot',
 pincode: '632503',
 district: 'Vellore',
 state: 'TAMIL NADU',
 latitude: 12.9059,
 longitude: 79.3192,
 distance: '25 km',
 travelTime: '35 minutes',
 description: 'Historic town known for Arcot Fort and rich cultural heritage, former capital of Nawab of Arcot',
 population: '45,000+',
 category: 'historic',
 amenities: {
 banks: [
 { name: 'Canara Bank', distance: '0.4 km', address: 'Arcot Bazaar' },
 { name: 'State Bank of India', distance: '0.5 km', address: 'Main Road' },
 { name: 'Indian Overseas Bank', distance: '0.6 km', address: 'Fort Road' },
 ],
 atms: [
 { name: 'SBI ATM', distance: '0.2 km', address: 'Near Fort' },
 { name: 'ICICI ATM', distance: '0.3 km', address: 'Bus Stand' },
 { name: 'Canara Bank ATM', distance: '0.4 km', address: 'Bazaar' },
 ],
 postOffices: [
 { name: 'Arcot Head Post Office', distance: '0.6 km', address: 'Fort Road' },
 ],
 hospitals: [
 { name: 'Taluk Hospital Arcot', distance: '1 km', address: 'Hospital Street', type: 'government' },
 { name: 'Primary Health Center', distance: '0.8 km', address: 'Medical Road', type: 'phc' },
 ],
 shopping: [
 { name: 'Arcot Market', distance: '0.3 km', address: 'Bazaar Street', type: 'market' },
 { name: 'Fort Road Shops', distance: '0.5 km', address: 'Fort Road', type: 'street' },
 ],
 restaurants: [
 { name: 'Hotel Saravana Bhavan', distance: '0.5 km', cuisine: 'South Indian' },
 { name: 'Sri Krishna Mess', distance: '0.4 km', cuisine: 'Vegetarian' },
 ],
 hotels: [
 { name: 'Hotel Arcot Palace', distance: '0.6 km', rating: 2 },
 ],
 },
 touristPlaces: [
 { name: 'Arcot Fort', type: 'fort', distance: '0.5 km' },
 { name: 'Jama Masjid', type: 'historic', distance: '0.8 km' },
 { name: 'Shenbagathoppu Lake', type: 'lake', distance: '2 km' },
 { name: 'Sri Ranganathaswamy Temple', type: 'temple', distance: '1.5 km' },
 { name: 'Nawab Palace Ruins', type: 'historic', distance: '1 km' },
 ],
 nearbyLocations: [
 { name: 'Kalavai', distance: '12 km', slug: 'kalavai' },
 { name: 'Walajapet', distance: '20 km', slug: 'walajapet' },
 { name: 'Timiri', distance: '15 km', slug: 'timiri' },
 { name: 'Vellore', distance: '25 km', slug: 'vellore' },
 { name: 'Ranipet', distance: '18 km', slug: 'ranipet' },
 ],
 transportOptions: {
 bus: true,
 train: false,
 auto: true,
 taxi: true,
 },
 specialFeatures: ['Historic Fort', 'Nawab Heritage', 'Cultural Significance', 'Tourist Destination'],
 },
 {
 name: 'Ranipet',
 slug: 'ranipet',
 taluk: 'Walajapet',
 pincode: '632401',
 district: 'Vellore',
 state: 'TAMIL NADU',
 latitude: 12.9249,
 longitude: 79.3339,
 distance: '20 km',
 travelTime: '30 minutes',
 description: 'Major industrial town known for leather tanning, BHEL manufacturing unit, and industrial estates',
 population: '65,000+',
 category: 'industrial',
 amenities: {
 banks: [
 { name: 'Indian Bank Ranipet', distance: '0.3 km', address: 'Ranipet Bazaar' },
 { name: 'State Bank of India', distance: '0.4 km', address: 'NH 48' },
 { name: 'City Union Bank', distance: '0.5 km', address: 'Industrial Area' },
 { name: 'ICICI Bank', distance: '0.6 km', address: 'BHEL Road' },
 ],
 atms: [
 { name: 'HDFC ATM', distance: '0.1 km', address: 'Near Bus Stand' },
 { name: 'Axis Bank ATM', distance: '0.2 km', address: 'Main Road' },
 { name: 'SBI ATM', distance: '0.3 km', address: 'Industrial Estate' },
 ],
 postOffices: [
 { name: 'Ranipet Post Office', distance: '0.5 km', address: 'Bazaar Street' },
 { name: 'BHEL Post Office', distance: '2 km', address: 'BHEL Township' },
 ],
 hospitals: [
 { name: 'Primary Health Center Ranipet', distance: '0.8 km', address: 'Medical Road', type: 'phc' },
 { name: 'Government Hospital', distance: '1.5 km', address: 'Hospital Street', type: 'government' },
 { name: 'BHEL Hospital', distance: '2.5 km', address: 'BHEL Township', type: 'private' },
 ],
 shopping: [
 { name: 'Ranipet Market', distance: '0.2 km', address: 'Market Area', type: 'market' },
 { name: 'Leather Showrooms', distance: '0.5 km', address: 'Industrial Estate', type: 'street' },
 { name: 'Commercial Complex', distance: '0.6 km', address: 'NH 48', type: 'mall' },
 ],
 restaurants: [
 { name: 'Annapoorna Restaurant', distance: '0.3 km', cuisine: 'South Indian' },
 { name: 'Hotel Saravana Bhavan', distance: '0.4 km', cuisine: 'Vegetarian' },
 { name: 'BHEL Canteen', distance: '2 km', cuisine: 'Multi-cuisine' },
 ],
 hotels: [
 { name: 'Hotel Ranipet', distance: '0.5 km', rating: 3 },
 { name: 'BHEL Guest House', distance: '2 km', rating: 4 },
 ],
 },
 touristPlaces: [
 { name: 'BHEL Ranipet', type: 'industrial', distance: '2 km' },
 { name: 'Jawaharlal Nehru Park', type: 'park', distance: '1 km' },
 { name: 'Leather Industrial Estate', type: 'industrial', distance: '0.5 km' },
 { name: 'Melvisharam Temple', type: 'temple', distance: '5 km' },
 ],
 nearbyLocations: [
 { name: 'Walajapet', distance: '8 km', slug: 'walajapet' },
 { name: 'Melvisharam', distance: '5 km', slug: 'melvisharam' },
 { name: 'Arcot', distance: '18 km', slug: 'arcot' },
 { name: 'Vellore', distance: '20 km', slug: 'vellore' },
 { name: 'Katpadi', distance: '22 km', slug: 'katpadi' },
 ],
 transportOptions: {
 bus: true,
 train: false,
 auto: true,
 taxi: true,
 },
 specialFeatures: ['BHEL Unit', 'Leather Industry', 'Industrial Hub', 'Good Employment'],
 },
 {
 name: 'Tirupattur',
 slug: 'tirupattur',
 taluk: 'Tirupattur',
 pincode: '635601',
 district: 'Vellore',
 state: 'TAMIL NADU',
 latitude: 12.4943,
 longitude: 78.5724,
 distance: '65 km',
 travelTime: '1.5 hours',
 description: 'Major municipality known for agriculture, education institutions, and gateway to Yelagiri Hills',
 population: '75,000+',
 category: 'major_town',
 amenities: {
 banks: [
 { name: 'Indian Overseas Bank', distance: '0.4 km', address: 'Fort Road' },
 { name: 'State Bank of India', distance: '0.5 km', address: 'Main Road' },
 { name: 'Canara Bank', distance: '0.6 km', address: 'Bus Stand' },
 { name: 'ICICI Bank', distance: '0.7 km', address: 'Commercial Street' },
 ],
 atms: [
 { name: 'Axis Bank ATM', distance: '0.2 km', address: 'Bus Stand' },
 { name: 'SBI ATM', distance: '0.3 km', address: 'Main Road' },
 { name: 'HDFC ATM', distance: '0.4 km', address: 'Market Area' },
 ],
 postOffices: [
 { name: 'Tirupattur Head Post Office', distance: '0.7 km', address: 'Gandhi Road' },
 ],
 hospitals: [
 { name: 'Government Hospital Tirupattur', distance: '1.5 km', address: 'Hospital Street', type: 'government' },
 { name: 'Primary Health Center', distance: '0.9 km', address: 'Medical Road', type: 'phc' },
 { name: 'Private Clinic', distance: '0.6 km', address: 'Main Road', type: 'private' },
 ],
 shopping: [
 { name: 'Tirupattur Market', distance: '0.5 km', address: 'Market Street', type: 'market' },
 { name: 'Shopping Complex', distance: '0.8 km', address: 'Commercial Area', type: 'mall' },
 ],
 restaurants: [
 { name: 'Hotel Saravana Bhavan', distance: '0.5 km', cuisine: 'South Indian' },
 { name: 'Ananda Bhavan', distance: '0.6 km', cuisine: 'Vegetarian' },
 ],
 hotels: [
 { name: 'Hotel Sri Balaji', distance: '0.6 km', rating: 3 },
 { name: 'Hotel Grand', distance: '0.8 km', rating: 3 },
 ],
 },
 touristPlaces: [
 { name: 'Tirupattur Fort', type: 'fort', distance: '1 km' },
 { name: 'Yelagiri Hills', type: 'park', distance: '25 km' },
 { name: 'Jalagamparai Waterfalls', type: 'park', distance: '30 km' },
 ],
 nearbyLocations: [
 { name: 'Vaniyambadi', distance: '18 km', slug: 'vaniyambadi' },
 { name: 'Jolarpet', distance: '25 km', slug: 'jolarpet' },
 { name: 'Ambur', distance: '22 km', slug: 'ambur' },
 { name: 'Vellore', distance: '65 km', slug: 'vellore' },
 ],
 transportOptions: {
 bus: true,
 train: true,
 auto: true,
 taxi: true,
 },
 specialFeatures: ['Gateway to Yelagiri', 'Educational Hub', 'Agriculture Center', 'Railway Station'],
 },
 {
 name: 'Vaniyambadi',
 slug: 'vaniyambadi',
 taluk: 'Vaniyambadi',
 pincode: '635751',
 district: 'Vellore',
 state: 'TAMIL NADU',
 latitude: 12.6817,
 longitude: 78.6197,
 distance: '55 km',
 travelTime: '1.25 hours',
 description: 'Major leather manufacturing hub and commercial center with strong export industry',
 population: '90,000+',
 category: 'industrial',
 amenities: {
 banks: [
 { name: 'City Union Bank', distance: '0.5 km', address: 'Railway Station Road' },
 { name: 'State Bank of India', distance: '0.4 km', address: 'Main Road' },
 { name: 'Indian Bank', distance: '0.6 km', address: 'Market Area' },
 ],
 atms: [
 { name: 'PNB ATM', distance: '0.3 km', address: 'Market Area' },
 { name: 'SBI ATM', distance: '0.4 km', address: 'Bus Stand' },
 ],
 postOffices: [
 { name: 'Vaniyambadi Head PO', distance: '0.6 km', address: 'Main Road' },
 ],
 hospitals: [
 { name: 'Government Hospital Vaniyambadi', distance: '1.2 km', address: 'Hospital Road', type: 'government' },
 { name: 'Primary Health Center', distance: '0.8 km', address: 'Medical Street', type: 'phc' },
 ],
 shopping: [
 { name: 'Vaniyambadi Market', distance: '0.4 km', address: 'Market Street', type: 'market' },
 { name: 'Leather Showrooms', distance: '0.6 km', address: 'Industrial Area', type: 'street' },
 ],
 restaurants: [
 { name: 'Hotel Saravana Bhavan', distance: '0.5 km', cuisine: 'South Indian' },
 ],
 hotels: [
 { name: 'Hotel Vaniyambadi', distance: '0.7 km', rating: 3 },
 ],
 },
 touristPlaces: [
 { name: 'Vaniyambadi Fort', type: 'fort', distance: '1 km' },
 { name: 'Yelagiri Hills', type: 'park', distance: '30 km' },
 ],
 nearbyLocations: [
 { name: 'Ambur', distance: '12 km', slug: 'ambur' },
 { name: 'Tirupattur', distance: '18 km', slug: 'tirupattur' },
 { name: 'Alangayam', distance: '20 km', slug: 'alangayam' },
 { name: 'Vellore', distance: '55 km', slug: 'vellore' },
 ],
 transportOptions: {
 bus: true,
 train: true,
 auto: true,
 taxi: true,
 },
 specialFeatures: ['Leather Manufacturing', 'Export Hub', 'Industrial Center', 'Railway Connectivity'],
 },
 // ─── Major Tamil Nadu Catchment Cities ──────────────────────────────────────
 {
 name: 'Chennai',
 slug: 'chennai',
 taluk: 'Chennai',
 pincode: '600001',
 district: 'Chennai',
 state: 'TAMIL NADU',
 latitude: 13.0827,
 longitude: 80.2707,
 distance: '140 km',
 travelTime: '2.5 hours',
 description: 'State capital and India\'s fourth largest city. Patients from Chennai trust Indira Hospital for specialised surgical procedures with best-in-class surgical standards.',
 population: '1,10,00,000+',
 category: 'city',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Marina Beach', type: 'park' }, { name: 'Fort St. George', type: 'fort' }],
 nearbyLocations: [{ name: 'Kanchipuram', distance: '72 km', slug: 'kanchipuram' }, { name: 'Chengalpattu', distance: '55 km', slug: 'chengalpattu' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['State Capital', 'International Airport', 'Major Railway Hub'],
 },
 {
 name: 'Krishnagiri',
 slug: 'krishnagiri',
 taluk: 'Krishnagiri',
 pincode: '635001',
 district: 'Krishnagiri',
 state: 'TAMIL NADU',
 latitude: 12.5186,
 longitude: 78.2137,
 distance: '95 km',
 travelTime: '2 hours',
 description: 'District headquarters known as the "Mango City". Patients from Krishnagiri district rely on Indira Hospital for advanced cardiac and surgical care.',
 population: '2,50,000+',
 category: 'district_hq',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Krishnagiri Dam', type: 'lake' }, { name: 'KRP Dam', type: 'lake' }],
 nearbyLocations: [{ name: 'Dharmapuri', distance: '50 km', slug: 'dharmapuri' }, { name: 'Hosur', distance: '40 km', slug: 'hosur' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Mango Capital', 'District HQ', 'Granite Industry'],
 },
 {
 name: 'Dharmapuri',
 slug: 'dharmapuri',
 taluk: 'Dharmapuri',
 pincode: '636701',
 district: 'Dharmapuri',
 state: 'TAMIL NADU',
 latitude: 12.1211,
 longitude: 78.1582,
 distance: '130 km',
 travelTime: '2.5 hours',
 description: 'District headquarters with growing healthcare demand. Patients travel to Indira Hospital for specialised surgery and interventional cardiology.',
 population: '2,00,000+',
 category: 'district_hq',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Hogenakkal Falls', type: 'park' }, { name: 'Dharmapuri Fort', type: 'fort' }],
 nearbyLocations: [{ name: 'Krishnagiri', distance: '50 km', slug: 'krishnagiri' }, { name: 'Salem', distance: '70 km', slug: 'salem' }],
 transportOptions: { bus: true, train: false, auto: true, taxi: true },
 specialFeatures: ['Hogenakkal Falls Nearby', 'District HQ', 'Agricultural Center'],
 },
 {
 name: 'Tiruvannamalai',
 slug: 'tiruvannamalai',
 taluk: 'Tiruvannamalai',
 pincode: '606601',
 district: 'Tiruvannamalai',
 state: 'TAMIL NADU',
 latitude: 12.2253,
 longitude: 79.0747,
 distance: '85 km',
 travelTime: '1.75 hours',
 description: 'Major pilgrimage city famous for Arunachaleswarar Temple. Patients from this spiritual hub access Indira Hospital for advanced medical care.',
 population: '3,50,000+',
 category: 'district_hq',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Arunachaleswarar Temple', type: 'temple' }, { name: 'Girivalam Path', type: 'temple' }],
 nearbyLocations: [{ name: 'Vellore', distance: '85 km', slug: 'vellore' }, { name: 'Villupuram', distance: '65 km', slug: 'villupuram' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Pilgrimage Center', 'District HQ', 'Spiritual Tourism'],
 },
 {
 name: 'Kanchipuram',
 slug: 'kanchipuram',
 taluk: 'Kanchipuram',
 pincode: '631501',
 district: 'Kanchipuram',
 state: 'TAMIL NADU',
 latitude: 12.8342,
 longitude: 79.7036,
 distance: '70 km',
 travelTime: '1.5 hours',
 description: 'Famous "Silk City" and UNESCO heritage destination. Patients from Kanchipuram district choose Indira Hospital for affordable super-speciality care.',
 population: '1,65,000+',
 category: 'district_hq',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Kailasanathar Temple', type: 'temple' }, { name: 'Ekambareswarar Temple', type: 'temple' }],
 nearbyLocations: [{ name: 'Chennai', distance: '72 km', slug: 'chennai' }, { name: 'Vellore', distance: '70 km', slug: 'vellore' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Silk Industry', 'UNESCO Heritage', 'Temple City'],
 },
 {
 name: 'Villupuram',
 slug: 'villupuram',
 taluk: 'Villupuram',
 pincode: '605602',
 district: 'Villupuram',
 state: 'TAMIL NADU',
 latitude: 11.9401,
 longitude: 79.4861,
 distance: '120 km',
 travelTime: '2.5 hours',
 description: 'Major railway junction and district headquarters. Patients from Villupuram district access Indira Hospital for laparoscopic and cardiac procedures.',
 population: '1,20,000+',
 category: 'district_hq',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Gingee Fort', type: 'fort' }, { name: 'Pondicherry', type: 'historic' }],
 nearbyLocations: [{ name: 'Tiruvannamalai', distance: '65 km', slug: 'tiruvannamalai' }, { name: 'Pondicherry', distance: '35 km', slug: 'pondicherry' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Railway Junction', 'District HQ', 'Near Pondicherry'],
 },
 {
 name: 'Salem',
 slug: 'salem',
 taluk: 'Salem',
 pincode: '636001',
 district: 'Salem',
 state: 'TAMIL NADU',
 latitude: 11.6643,
 longitude: 78.146,
 distance: '160 km',
 travelTime: '3 hours',
 description: 'Fourth largest city in Tamil Nadu, known for steel and mango industries. Patients seek Indira Hospital for advanced surgical and orthopaedic care.',
 population: '9,50,000+',
 category: 'city',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Yercaud Hill Station', type: 'park' }, { name: 'Mettur Dam', type: 'lake' }],
 nearbyLocations: [{ name: 'Dharmapuri', distance: '70 km', slug: 'dharmapuri' }, { name: 'Erode', distance: '65 km', slug: 'erode' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Steel City', 'Yercaud Hill Station', 'Airport'],
 },
 {
 name: 'Chengalpattu',
 slug: 'chengalpattu',
 taluk: 'Chengalpattu',
 pincode: '603001',
 district: 'Chengalpattu',
 state: 'TAMIL NADU',
 latitude: 12.6819,
 longitude: 79.9888,
 distance: '100 km',
 travelTime: '2 hours',
 description: 'Growing suburban hub near Chennai. Patients from Chengalpattu district access Indira Hospital for affordable specialised surgical treatment.',
 population: '75,000+',
 category: 'district_hq',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Mahabalipuram', type: 'historic' }, { name: 'Vedanthangal Bird Sanctuary', type: 'park' }],
 nearbyLocations: [{ name: 'Chennai', distance: '55 km', slug: 'chennai' }, { name: 'Kanchipuram', distance: '30 km', slug: 'kanchipuram' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Near Chennai', 'Railway Junction', 'Growing Hub'],
 },
 {
 name: 'Cuddalore',
 slug: 'cuddalore',
 taluk: 'Cuddalore',
 pincode: '607001',
 district: 'Cuddalore',
 state: 'TAMIL NADU',
 latitude: 11.7447,
 longitude: 79.7689,
 distance: '150 km',
 travelTime: '3 hours',
 description: 'Coastal port town and district headquarters. Patients from Cuddalore district travel to Indira Hospital for advanced urology and gastro procedures.',
 population: '1,75,000+',
 category: 'district_hq',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Silver Beach', type: 'park' }, { name: 'Pichavaram Mangrove Forest', type: 'park' }],
 nearbyLocations: [{ name: 'Villupuram', distance: '40 km', slug: 'villupuram' }, { name: 'Pondicherry', distance: '25 km', slug: 'pondicherry' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Port Town', 'SIPCOT Industrial Estate', 'Coastal City'],
 },
 {
 name: 'Erode',
 slug: 'erode',
 taluk: 'Erode',
 pincode: '638001',
 district: 'Erode',
 state: 'TAMIL NADU',
 latitude: 11.3410,
 longitude: 77.7172,
 distance: '200 km',
 travelTime: '3.5 hours',
 description: 'Major textile and turmeric trading hub. Patients from Erode district seek Indira Hospital for specialised cardiology and neurology services.',
 population: '5,50,000+',
 category: 'city',
 amenities: { banks: [], atms: [], postOffices: [], hospitals: [], shopping: [], restaurants: [], hotels: [] },
 touristPlaces: [{ name: 'Bhavanisagar Dam', type: 'lake' }, { name: 'Kodiveri Falls', type: 'park' }],
 nearbyLocations: [{ name: 'Salem', distance: '65 km', slug: 'salem' }, { name: 'Coimbatore', distance: '100 km', slug: 'coimbatore' }],
 transportOptions: { bus: true, train: true, auto: true, taxi: true },
 specialFeatures: ['Textile Hub', 'Turmeric Trade', 'Junction City'],
 },
];

// Helper functions
export function getEnhancedLocationBySlug(slug: string): EnhancedLocationData | undefined {
 return enhancedVelloreLocations.find(loc => loc.slug === slug);
}

export function getLocationsByTaluk(taluk: string): EnhancedLocationData[] {
 return enhancedVelloreLocations.filter(loc =>
 loc.taluk.toLowerCase() === taluk.toLowerCase()
 );
}

export function getLocationsByCategory(category: string): EnhancedLocationData[] {
 return enhancedVelloreLocations.filter(loc => loc.category === category);
}

export function getMajorTowns(): EnhancedLocationData[] {
 return enhancedVelloreLocations.filter(loc =>
 loc.category === 'major_town' || loc.category === 'industrial'
 );
}

export function getTamilNaduCities(): EnhancedLocationData[] {
 return enhancedVelloreLocations.filter(loc =>
 loc.category === 'city' || loc.category === 'district_hq'
 );
}

