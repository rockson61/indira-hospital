"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  selector?: string; // The CSS selector for the container of the content (e.g., '.prose')
  className?: string;
  title?: string;
}

export function TableOfContents({
  selector = ".prose",
  className,
  title = "Table of Contents",
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // 1. Find the container
    const container = document.querySelector(selector);
    if (!container) return;

    // 2. Query all H2 and H3 elements inside the container
    const elements = Array.from(container.querySelectorAll("h2, h3"));
    
    // 3. Ensure they have IDs and extract data
    const parsedHeadings: Heading[] = elements.map((elem, index) => {
      let id = elem.id;
      if (!id) {
        // Generate an ID if one doesn't exist based on text
        id = elem.textContent
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, "") || `heading-${index}`;
        elem.id = id;
      }
      return {
        id,
        text: elem.textContent || "",
        level: Number(elem.tagName.charAt(1)),
      };
    });

    setHeadings(parsedHeadings);

    // 4. Setup Intersection Observer for active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    elements.forEach((elem) => observer.observe(elem));

    return () => observer.disconnect();
  }, [selector]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <nav className={cn("space-y-4", className)}>
      <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
        {title}
      </h4>
      <ul className="space-y-2.5 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}
          >
            <a
              href={`#${heading.id}`}
              className={cn(
                "block transition-colors duration-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-400",
                activeId === heading.id
                  ? "text-fuchsia-600 dark:text-fuchsia-400 font-medium"
                  : "text-slate-600 dark:text-slate-400"
              )}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveId(heading.id);
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
