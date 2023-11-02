/**
 * Site metadata that is used across the site.
 *
 * A few of these are not used yet, and are subject to change, example of this is Author.
 */
export const SITE_METADATA = {
    title: 'Astro Starter Blog',
    headerTitle: 'Astro Starter Blog',
    description: 'A blog created with Astro and Tailwind.css',
    language: 'en-us',
    theme: 'system', // Options: system, light, dark, Does not work yet
    siteUrl: 'https://astro-starter-blog.yon.fun/',
    siteRepo: 'https://github.com/wanoo21/tailwind-astro-starting-blog',
    siteLogo: '/static/images/logo.png',
    socialBanner: '/static/images/twitter-card.png',
    locale: 'en-US',

    // The following are subject to change. They are placeholders for now.
    // This project provide a default author content see src/content/authors/default.mdx, so these details are better to be inserted there.
    author: 'John Doe',
    mastodon: 'https://mastodon.social/@mastodonuser',
    email: 'address@yoursite.com',
    github: 'https://github.com',
    twitter: 'https://twitter.com/Twitter',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://www.linkedin.com',
};

/**
 * Default posts per page for pagination.
 */
export const ITEMS_PER_PAGE = 5;

export const NAVIGATION = [
    {href: '/', title: 'Home'},
    {href: '/blog', title: 'Blog'},
    {href: '/tags', title: 'Tags'},
    {href: '/projects', title: 'Projects'},
    {href: '/about', title: 'About'},
]
