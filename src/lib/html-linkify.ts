
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

    // Sort terms by length (descending) to match longest specific terms first
    // e.g. "Heart Attack" before "Heart"
    const terms = GLOSSARY_DATA
        .map(t => ({
            term: t.term,
            url: t.relatedService ? `/glossary?term=${encodeURIComponent(t.term)}` : '/glossary',
            definition: t.definition
        }))
        .sort((a, b) => b.term.length - a.term.length);

    // We act on text nodes only. A simple robust way without a DOM parser in Node env
    // is to split by tags.
    // HTML split regex: (<[^>]+>)
    // The result array will have: [text, <tag>, text, <tag>, ...]
    const parts = htmlContent.split(/(<[^>]+>)/g);

    for (let i = 0; i < parts.length; i++) {
        // If it's a tag, skip it
        if (parts[i].startsWith('<')) {
            continue;
        }

        // It's a text node. Perform replacements.
        let text = parts[i];

        // We need to be careful not to double-link or link inside words inappropriately.
        // We use a comprehensive regex for all terms at once? 
        // Or iterate? Iterating is safer for precedence but slower. 
        // Given ~30-50 terms, iteration is fine.

        // However, if we replace "Heart" with <a...>Heart</a>, next iteration "Heart Attack" might fail or mess up.
        // We already sorted by length descending.

        // Better approach: Create a single massive regex.
        // Escape terms for regex
        const escapedTerms = terms.map(t => t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const pattern = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');

        // We use a replacement function to look up the correct URL
        text = text.replace(pattern, (match) => {
            const matchedTerm = terms.find(t => t.term.toLowerCase() === match.toLowerCase());
            if (matchedTerm) {
                return `<a href="${matchedTerm.url}" class="text-purple-600 hover:underline decoration-purple-300 underline-offset-2 font-medium" title="${matchedTerm.definition}">${match}</a>`;
            }
            return match;
        });

        parts[i] = text;
    }

    return parts.join('');
};
