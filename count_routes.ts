import { SEED_DATA } from './src/lib/data/seed-data';
import { tamilNaduLocations } from './src/lib/data/tamilnadu-locations';
import { getAllTechnologies } from './src/lib/data/technology-data';
import { PATIENT_RESOURCES } from './src/lib/data/patient-resources';
import { TREATMENT_DATA } from './src/lib/data/treatment-data';
import { INTERNATIONAL_COUNTRIES } from './src/lib/data/international-data';
import { GLOSSARY_DATA } from './src/lib/data/glossary-data';

const staticRoutes = 37;
const departments = SEED_DATA.services.length;
const services = SEED_DATA.services.length;
const doctors = SEED_DATA.doctors.length;
const locations = tamilNaduLocations.length;
const healthPackages = 0; // fallback returns []
const diagnostics = SEED_DATA.diagnostics.length;
const technologies = getAllTechnologies().length;
const patientResources = PATIENT_RESOURCES.length;
const treatments = TREATMENT_DATA.length;
const internationalCountryRoutes = INTERNATIONAL_COUNTRIES.length;
const glossaryRoutes = GLOSSARY_DATA.length;

const cityDeptRoutes = locations * departments;
const cityDoctorRoutes = locations * doctors;

const total = staticRoutes + departments + services + locations + doctors + healthPackages + diagnostics + technologies + patientResources + treatments + internationalCountryRoutes + glossaryRoutes + cityDeptRoutes + cityDoctorRoutes;

console.log(JSON.stringify({
    staticRoutes, departments, services, doctors, locations, healthPackages, diagnostics, technologies, patientResources, treatments, internationalCountryRoutes, glossaryRoutes, cityDeptRoutes, cityDoctorRoutes, total
}, null, 2));
