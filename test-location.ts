import { tamilNaduLocations } from './src/lib/data/tamilnadu-locations';
const loc = tamilNaduLocations.find(l => l.slug === 'erode');
console.log(loc);
