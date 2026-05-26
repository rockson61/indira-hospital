import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs))
}

export function getImageUrl(id?: string) {
 if (!id) return '/images/hospital/Hospital view 2.webp';

 // If it's already a full URL or a local path, return as is
 if (id.startsWith('http') || id.startsWith('/') || id.startsWith('data:')) {
 return id;
 }

 if (!process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_API_URL === 'undefined') {
 return '/images/hospital/Hospital view 2.webp';
 }

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
