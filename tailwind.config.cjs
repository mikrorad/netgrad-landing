import colors from 'tailwindcss/colors';
import preline from 'preline/plugin.js';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        'node_modules/preline/dist/*.js',
    ],
    darkMode: ['class', '[data-mode="niga"]'],
    theme: {
        extend: {
            lineHeight: {
                11: '2.75rem',
                12: '3rem',
                13: '3.25rem',
                14: '3.5rem',
            },
            colors: {
                primary: colors.pink,
                gray: colors.gray,
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.600')}`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        'h1,h2': {
                            fontWeight: '700',
                            letterSpacing: theme('letterSpacing.tight'),
                        },
                        h3: {
                            fontWeight: '600',
                        },
                        code: {
                            color: theme('colors.indigo.500'),
                        },
                    },
                },
                invert: {
                    css: {
                        a: {
                            color: theme('colors.primary.500'),
                            '&:hover': {
                                color: `${theme('colors.primary.400')}`,
                            },
                            code: { color: theme('colors.primary.400') },
                        },
                        'h1,h2,h3,h4,h5,h6': {
                            color: theme('colors.gray.100'),
                        },
                    },
                },
            }),
        },
    },
    plugins: [preline, forms, typography, colors],
}
