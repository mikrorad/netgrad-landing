/**
 * Site metadata that is used across the site.
 *
 * A few of these are not used yet, and are subject to change, example of this is Author.
 */
export const SITE_METADATA = {
    title: 'Astro Starter Blog',
    headerTitle: 'NetGrad',
    description: 'A blog created with Astro and Tailwind.css',
    language: 'en-us',
    theme: 'system', // Options: system, light, dark, Does not work yet
    siteUrl: 'https://astro-starter-blog.yon.fun/',
    siteRepo: 'https://github.com/wanoo21/tailwind-astro-starting-blog',
    siteLogo: '/static/images/logo.png',
    socialBanner: '/static/images/twitter-card.png',
    locale: 'en-US',
};

/**
 * Default posts per page for pagination.
 */
export const ITEMS_PER_PAGE = 5;

export const NAVIGATION = [
    {href: '/', title: 'Home'},
    {href: '/blog', title: 'Blog'},
    {href: '/contact', title: 'Contact'},
    {href: 'https://app.netgrad.id', title: 'Dashboard'},
]
