// Auto-generated blog posts metadata
// Run: node scripts/generate-blog-data.js to regenerate

import { allMigratedPosts } from './blog-posts-migrated';

export interface BlogPost {
  slug: string
  title: string
  category?: string
  excerpt: string
  date: string
  readTime: string
  image?: string
  author?: string
  tags?: string[]
}

// Export the generated posts
export const allBlogPosts: BlogPost[] = allMigratedPosts;

// Export default for convenience
export default allBlogPosts;

// Export count for reference
export const blogPostCount = allBlogPosts.length;

// Helper function to get posts by category
export function getBlogPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter(post => post.category === category);
}

// Helper function to get all unique categories
export function getAllCategories(): string[] {
  const categories = new Set(allBlogPosts.map(post => post.category).filter((c): c is string => c !== undefined));
  return Array.from(categories).sort();
}

// Helper function to get category counts
export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  allBlogPosts.forEach(post => {
    const category = post.category ?? 'uncategorized';
    counts[category] = (counts[category] || 0) + 1;
  });
  return counts;
}

// Helper function to get a single post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

// Server-side pagination helpers
export function getPaginatedBlogPosts(
  page: number = 1,
  perPage: number = 12
): BlogPost[] {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return allBlogPosts.slice(startIndex, endIndex);
}

export function getPaginatedBlogPostsByCategory(
  category: string,
  page: number = 1,
  perPage: number = 12
): BlogPost[] {
  const categoryPosts = getBlogPostsByCategory(category);
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return categoryPosts.slice(startIndex, endIndex);
}

export function searchBlogPosts(
  query: string,
  page: number = 1,
  perPage: number = 12
): BlogPost[] {
  const searchLower = query.toLowerCase();
  const filtered = allBlogPosts.filter(post =>
    post.title.toLowerCase().includes(searchLower) ||
    post.excerpt.toLowerCase().includes(searchLower)
  );
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return filtered.slice(startIndex, endIndex);
}

export function getTotalPages(
  perPage: number = 12,
  category?: string,
  searchQuery?: string
): number {
  let totalPosts = allBlogPosts.length;

  if (category && category !== 'all') {
    totalPosts = getBlogPostsByCategory(category).length;
  }

  if (searchQuery) {
    const searchLower = searchQuery.toLowerCase();
    totalPosts = allBlogPosts.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower)
    ).length;
  }

  return Math.ceil(totalPosts / perPage);
}
