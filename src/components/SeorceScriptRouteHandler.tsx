"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SEORCE_SRC = "https://scripts.seorce.com/api?projectId=6a2e65413f9dac8c30e24143";
const SEORCE_PROJECT_ID = "6a2e65413f9dac8c30e24143";

export function SeorceScriptRouteHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      `script#seorce-dynamic-script`
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");
    script.src = SEORCE_SRC;
    script.defer = true;
    script.setAttribute("data-uuid", SEORCE_PROJECT_ID);
    script.setAttribute("data-injected", "1");
    script.setAttribute("id", "seorce-dynamic-script");
    script.dataset.injectedAt = String(Date.now());

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
   fetch(SEORCE_SRC)
      .then((response) => response.text())
      .then((scriptContent) => {
        // Execute the IIFE
        const scriptElement = document.createElement("script");
        scriptElement.textContent = scriptContent;
        document.body.appendChild(scriptElement);
      })
      .catch((error) => {
        console.error("Failed to execute Seorce script:", error);
      });
  }, [pathname, searchParams]);

  return null;
}
