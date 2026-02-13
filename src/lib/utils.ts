import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(id?: string) {
  if (!id) return null;
  return `${process.env.NEXT_PUBLIC_API_URL}/assets/${id}`;
}

export function safeRemoveNode(node: Node | null) {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

export const createPageUrl = (pageName: string) => {
  return `/${pageName}`;
};

export const createServicePageUrl = (serviceName: string) => {
  return `/services/${serviceName}`;
};
