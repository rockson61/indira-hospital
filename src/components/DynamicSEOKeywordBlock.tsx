'use client';

import { useEffect, useState } from "react";

/**
 * DynamicSEOKeywordBlock
 * 
 * Automatically reads the H1 title from the page DOM and generates
 * a unique keyword cluster for SEO crawlers. The block is hidden 
 * from regular users but visible in the server-rendered/hydrated HTML.
 */
export default function DynamicSEOKeywordBlock() {
    const [html, setHtml] = useState("");

    useEffect(() => {
        // Find the primary H1 on the page
        const h1 = document.querySelector("h1");
        if (!h1) return;

        const title = h1.innerText;
        const base = title.toLowerCase();

        // Generate a semantic keyword cluster
        const keywords = [
            base,
            `best ${base}`,
            `${base} services`,
            `${base} hospital`,
            `${base} treatment`,
            `${base} specialist`,
            `${base} near me`,
            `top ${base}`,
            `${base} medical services`,
            `${base} expert care`,
            `${base} in vellore`,
            `${base} tamil nadu`,
            `${base} india`
        ];

        const paragraph = `${base} provides advanced healthcare services including cardiology, orthopaedics, gastroenterology, nephrology, oncology and diagnostic imaging. Patients search for the best hospital, specialist treatment, and expert medical care related to ${base}. Our healthcare professionals at Indira Super Speciality Hospital provide patient-centered treatment plans, modern medical technology, and comprehensive healthcare services.`;

        const generatedHTML = `
            <div id="dynamic-seo-keywords" style="display:none;" aria-hidden="true">
                <h1>${keywords.join(", ")}</h1>
                <h2>${keywords.join(", ")}</h2>
                <h3>${keywords.join(", ")}</h3>
                <h4>${keywords.join(", ")}</h4>
                <h5>${keywords.join(", ")}</h5>
                <h6>${keywords.join(", ")}</h6>
                <p>${paragraph}</p>
            </div>
        `;

        setHtml(generatedHTML);
    }, []);

    if (!html) return null;

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
