'use client';

import { useEffect } from 'react';

declare global {
  interface Navigator {
    modelContext?: {
      provideContext: (tools: any) => void;
    };
  }
}

export function WebMCPProvider() {
  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.modelContext) {
      try {
        navigator.modelContext.provideContext({
          tools: [
            {
              name: "book_appointment",
              description: "Navigate the user to the appointment booking page for Indira Hospital.",
              inputSchema: {
                type: "object",
                properties: {
                  department: {
                    type: "string",
                    description: "Optional department to pre-select"
                  }
                }
              },
              execute: async (args: any) => {
                const url = new URL(window.location.origin + '/book-appointment');
                if (args.department) {
                  url.searchParams.set('dept', args.department);
                }
                window.location.href = url.toString();
                return {
                  type: "success",
                  message: "Navigating to appointment booking."
                };
              }
            }
          ]
        });
      } catch (error) {
        console.error("Failed to provide WebMCP context:", error);
      }
    }
  }, []);

  return null;
}
