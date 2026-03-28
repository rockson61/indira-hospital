
import { GLOSSARY_DATA } from './data/glossary-data';

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

    const slugify = (text: string) => text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').trim();

    // Part 1: Glossary Linking
    const glossaryTerms = GLOSSARY_DATA
        .map(t => ({
            term: t.term,
            url: `/glossary/${slugify(t.term)}`,
            definition: t.definition
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

    // We act on text nodes only. A simple robust way without a DOM parser in Node env
    // is to split by tags.
    const parts = htmlContent.split(/(<[^>]+>)/g);

    const escapedGlossaryTerms = glossaryTerms.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const glossaryPattern = new RegExp(`\\b(${escapedGlossaryTerms.join('|')})\\b`, 'gi');

    const escapedLsiTerms = lsiKeywords.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const lsiPattern = new RegExp(`\\b(${escapedLsiTerms.join('|')})\\b`, 'gi');

    for (let i = 0; i < parts.length; i++) {
        // If it's a tag, skip it
        if (parts[i].startsWith('<')) {
            continue;
        }

        let text = parts[i];

        // 1. Inject Glossary Links
        text = text.replace(glossaryPattern, (match) => {
            const matchedTerm = glossaryTerms.find(t => t.term.toLowerCase() === match.toLowerCase());
            if (matchedTerm) {
                return `<a href="${matchedTerm.url}" class="text-fuchsia-700 dark:text-fuchsia-400 hover:underline decoration-fuchsia-300 underline-offset-2 font-semibold" title="${matchedTerm.definition}">${match}</a>`;
            }
            return match;
        });

        // 2. We split text AGAIN by A tags so we don't bold something inside an href
        const subParts = text.split(/(<[^>]+>)/g);
        for(let j=0; j<subParts.length; j++){
            if (subParts[j].startsWith('<')) continue;
            
            // Bold LSI Keywords
            subParts[j] = subParts[j].replace(lsiPattern, (match) => {
                return `<strong class="font-black text-slate-900 dark:text-white bg-fuchsia-50 dark:bg-fuchsia-950/30 px-1 rounded-sm">${match}</strong>`;
            });
        }
        parts[i] = subParts.join('');
    }

    return parts.join('');
};
