import { GLOSSARY_DATA } from './data/glossary-data';
import { TREATMENT_DATA } from './data/treatment-data';

const slugify = (text: string) => text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim();

// Part 1: Glossary Linking
const glossaryTerms = GLOSSARY_DATA
    .map(t => ({
        term: t.term,
        url: `/glossary/${slugify(t.term)}`,
        definition: t.definition
    }))
    .sort((a, b) => b.term.length - a.term.length);

// Part 1.5: Treatment Linking (High Priority)
const treatmentTerms = TREATMENT_DATA
    .map(t => ({
        term: t.title,
        url: `/doctor/near-me/treat/${t.parentServiceSlug}/${t.slug}`,
        keywords: [t.title, t.title.toLowerCase(), t.slug.replace(/-/g, ' ')]
    }))
    .sort((a, b) => b.term.length - a.term.length);

// Part 2: LSI Keywords to Bold
const lsiKeywords = [
    "Best Hospital in Vellore",
    "Top Hospital",
    "Top specialists",
    "Best doctor",
    "Best surgeon",
    "expert care",
    "advanced technology",
    "NABH accredited",
    "institutional value",
    "same-day discharge",
    "minimally invasive",
    "robotic surgery",
    "laser surgery",
    "patient safety"
].sort((a, b) => b.length - a.length);

const escapedGlossaryTerms = glossaryTerms
    .map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .filter(k => k.length > 1); // Minimum 2 chars for linking
const glossaryPattern = glossaryTerms.length > 0 ? new RegExp(`\\b(${escapedGlossaryTerms.join('|')})\\b`, 'gi') : null;

const escapedLsiTerms = lsiKeywords
    .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .filter(k => k.length > 0);
const lsiPattern = lsiKeywords.length > 0 ? new RegExp(`\\b(${escapedLsiTerms.join('|')})\\b`, 'gi') : null;

const escapedTreatments = treatmentTerms
    .flatMap(t => t.keywords)
    .filter(Boolean)
    .map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .filter(k => k.length > 2); // Minimum 3 chars for treatments
const treatmentPattern = escapedTreatments.length > 0 ? new RegExp(`\\b(${escapedTreatments.join('|')})\\b`, 'gi') : null;

/**
 * Safely injects internal links into an HTML string by replacing known medical terms 
 * with anchor tags pointing to the glossary or relevant pages.
 * 
 * It avoids replacing terms inside existing HTML tags.
 * 
 * @param htmlContent The original HTML content.
 * @returns The HTML content with injected links.
 */
export const injectInternalLinks = (htmlContent: string): string => {
    if (!htmlContent) return "";

    // We act on text nodes only. A simple robust way without a DOM parser in Node env
    // is to split by tags.
    const parts = htmlContent.split(/(<[^>]+>)/g);

    for (let i = 0; i < parts.length; i++) {
        // If it's a tag, skip it
        if (parts[i].startsWith('<')) {
            continue;
        }

        let text = parts[i];

        // 1. Inject Treatment Links (Priority 1)
        if (treatmentPattern) {
            text = text.replace(treatmentPattern, (match) => {
                const matchedTreat = treatmentTerms.find(t => t.keywords.some(k => k.toLowerCase() === match.toLowerCase()));
                if (matchedTreat) {
                    return `<a href="${matchedTreat.url}" class="text-fuchsia-600 dark:text-fuchsia-400 hover:underline decoration-fuchsia-400 underline-offset-4 font-bold" title="View details for ${matchedTreat.term}">${match}</a>`;
                }
                return match;
            });
        }

        // 2. Inject Glossary Links (Priority 2, only if not already linked)
        if (glossaryPattern) {
            const subParts = text.split(/(<[^>]+>)/g);
            for (let j = 0; j < subParts.length; j++) {
                if (subParts[j].startsWith('<')) continue;

                subParts[j] = subParts[j].replace(glossaryPattern, (match) => {
                    const matchedTerm = glossaryTerms.find(t => t.term.toLowerCase() === match.toLowerCase());
                    if (matchedTerm) {
                        return `<a href="${matchedTerm.url}" class="text-slate-700 dark:text-slate-300 border-b border-dotted border-fuchsia-300 hover:text-fuchsia-600 transition-colors cursor-help" title="${matchedTerm.definition}">${match}</a>`;
                    }
                    return match;
                });
            }
            text = subParts.join('');
        }

        // 3. We split text AGAIN by A tags so we don't bold something inside an href
        if (lsiPattern) {
            const boldParts = text.split(/(<[^>]+>)/g);
            for(let k=0; k<boldParts.length; k++){
                if (boldParts[k].startsWith('<')) continue;
                
                // Bold LSI Keywords
                boldParts[k] = boldParts[k].replace(lsiPattern, (match) => {
                    return `<strong class="font-black text-slate-900 dark:text-white bg-fuchsia-50 dark:bg-fuchsia-950/30 px-1 rounded-sm">${match}</strong>`;
                });
            }
            parts[i] = boldParts.join('');
        } else {
            parts[i] = text;
        }
    }

    return parts.join('');
};
