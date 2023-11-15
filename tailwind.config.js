/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: ({ theme }) => ({
        emerald: {
          css: {
            '--tw-prose-body': theme('colors.emerald[300]'),
            '--tw-prose-headings': theme('colors.emerald[400]'),
            '--tw-prose-lead': theme('colors.emerald[300]'),
            '--tw-prose-links': theme('colors.emerald[500]'),
            '--tw-prose-bold': theme('colors.emerald[400]'),
            '--tw-prose-counters': theme('colors.emerald[300]'),
            '--tw-prose-bullets': theme('colors.emerald[300]'),
            '--tw-prose-hr': theme('colors.emerald[300]'),
            '--tw-prose-quotes': theme('colors.emerald[300]'),
            '--tw-prose-quote-borders': theme('colors.emerald[300]'),
            '--tw-prose-captions': theme('colors.emerald[700]'),
            '--tw-prose-code': theme('colors.emerald[300]'),
            '--tw-prose-pre-code': theme('colors.emerald[100]'),
            '--tw-prose-pre-bg': theme('colors.emerald[300]'),
            '--tw-prose-th-borders': theme('colors.emerald[300]'),
            '--tw-prose-td-borders': theme('colors.emerald[200]'),
            '--tw-prose-invert-body': theme('colors.emerald[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.emerald[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.emerald[400]'),
            '--tw-prose-invert-bullets': theme('colors.emerald[600]'),
            '--tw-prose-invert-hr': theme('colors.emerald[700]'),
            '--tw-prose-invert-quotes': theme('colors.emerald[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.emerald[700]'),
            '--tw-prose-invert-captions': theme('colors.emerald[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.emerald[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.emerald[600]'),
            '--tw-prose-invert-td-borders': theme('colors.emerald[700]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
