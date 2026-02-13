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
  category: 'major_town' | 'town' | 'village' | 'industrial' | 'historic'
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
      { name: 'Vellore', distance: '35 km', slug: '' },
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
      { name: 'Vellore', distance: '25 km', slug: '' },
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
      { name: 'Vellore', distance: '20 km', slug: '' },
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
      { name: 'Vellore', distance: '65 km', slug: '' },
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
      { name: 'Vellore', distance: '55 km', slug: '' },
    ],
    transportOptions: {
      bus: true,
      train: true,
      auto: true,
      taxi: true,
    },
    specialFeatures: ['Leather Manufacturing', 'Export Hub', 'Industrial Center', 'Railway Connectivity'],
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

