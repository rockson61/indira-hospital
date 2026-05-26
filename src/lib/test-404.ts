import { getTreatmentBySlug } from './data/treatment-data';

const testSlug = "acl-injuries";
const treatment = getTreatmentBySlug(testSlug);

if (treatment) {
 print(`SUCCESS: Found treatment for ${testSlug}: ${treatment.title}`);
} else {
 print(`FAILURE: Could not find treatment for ${testSlug}`);
}

function print(msg: string) {
 console.log(msg);
}
