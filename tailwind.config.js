const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        custom: '0 3px 3px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23)',
      },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        poppins: ['sans-serif'],
      },
      colors: {
        primary: colors.blue,
        gray: colors.neutral,
        night: '#18191a',
        day: '#F8F6F4',
        accent: '#F65252',
        highlight: '#61afef',
        codeline: '#1b1d21',
      },
      gridTemplateColumns: {
        card: 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      gridTemplateRows: {
        card: 'minmax(350px, auto)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary.500'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary.600'),
                textDecoration: 'underline',
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6,hr': {
              margin: '1.25rem 0',
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.400') },
            'ol li,ul li': {
              listStyle: 'none',
            },
            'ol li::before,ul li::before': {
              all: 'unset',
              position: 'absolute',
              left: '0',
              fontWeight: '600',
              color: theme('colors.accent'),
              content: '"❯"',
              padding: '0 .5rem',
            },
            'ol li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              color: theme('colors.gray.800'),
            },
            'ol li > :first-child, ol li > :last-child': {
              margin: '0.25rem 0',
            },
            'ul li > :first-child, ul li > :last-child': {
              margin: '0.25rem 0',
            },
            strong: { color: theme('colors.gray.800') },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.500'),
              },
              code: { color: theme('colors.primary.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            'pre code::before': {
              'padding-left': 'unset',
            },
            'pre code::after': {
              'padding-right': 'unset',
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li,ul li': {
              listStyle: 'none',
            },
            'ol li::before, ul li::before': {
              all: 'unset',
              position: 'absolute',
              left: '0',
              fontWeight: '600',
              color: theme('colors.accent'),
              content: '"❯"',
              padding: '0 .5rem',
            },
            'ol li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              color: theme('colors.gray.300'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
