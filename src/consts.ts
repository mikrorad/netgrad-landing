/**
 * Site metadata that is used across the site.
 *
 * A few of these are not used yet, and are subject to change, example of this is Author.
 */
const URL = process.env.CONTEXT === 'production' ? 'https://netgrad.id' : process.env.URL;

export const SITE_METADATA = {
    title: 'NetGrad',
    headerTitle: 'NetGrad',
    description: 'Kelola Jaringan Dengan Mudah',
    language: 'id-ID',
    theme: 'light', // Options: system, light, dark, Does not work yet
    siteUrl: URL,
    siteRepo: '',
    siteLogo: '/static/images/logo.png',
    locale: 'id-ID',
};

/**
 * Default posts per page for pagination.
 */
export const ITEMS_PER_PAGE = 8;

export const NAVIGATION = [
    {href: '/', title: 'Home'},
    {href: '/tutorial', title: 'Tutorial'},
    {href: '/contact', title: 'Kontak'},
    {href: 'https://app.netgrad.id', title: 'Dashboard'},
]
