
import React from 'react';
import Link from 'next/link';
import { GLOSSARY_DATA } from './data/glossary-data';

/**
 * Replaces medical terms in the text with links to the Glossary or Service pages.
 * @param text The text content to process.
 * @returns A React node with linked terms.
 */
export const linkifyTerms = (text: string): React.ReactNode => {
    if (!text) return null;

    // Create a regex pattern from glossary terms, sorted by length (descending) to match longest terms first
    const terms = GLOSSARY_DATA.map(g => g.term).sort((a, b) => b.length - a.length);
    const pattern = new RegExp(`\\b(${terms.join('|')})\\b`, 'gi');

    const parts = text.split(pattern);

    return (
        <>
            {parts.map((part, index) => {
                const matchedTerm = GLOSSARY_DATA.find(g => g.term.toLowerCase() === part.toLowerCase());

                if (matchedTerm) {
                    return (
                        <Link
                            key={index}
                            href="/glossary"
                            className="text-purple-600 font-medium hover:underline decoration-purple-300 underline-offset-2"
                            title={`Definition: ${matchedTerm.definition}`}
                        >
                            {part}
                        </Link>
                    );
                }
                return part;
            })}
        </>
    );
};
