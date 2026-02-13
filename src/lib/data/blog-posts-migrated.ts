// Auto-generated WordPress migration index
// Total posts: 1464
// Generated: 2026-01-03T07:39:36.791Z

import { BlogPost } from './blog-posts'
import { blogPosts2022 } from './blog-posts-2022'
import { blogPosts2023 } from './blog-posts-2023'
import { blogPosts2024 } from './blog-posts-2024'
import { blogPosts2026 } from './blog-posts-2026'

export const allMigratedPosts: BlogPost[] = [
  ...blogPosts2022,
  ...blogPosts2023,
  ...blogPosts2024,
  ...blogPosts2026
]

// Export by year for easy access
export const postsByYear = {
  '2022': blogPosts2022,
  '2023': blogPosts2023,
  '2024': blogPosts2024,
  '2026': blogPosts2026
}
