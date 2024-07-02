import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      //? Background images
      backgroundImage: {
        bruit: "url('/ressources/noise-background.gif')",
      },

      //? Custom colors
      colors: {
        nm: {
          gray: {
            200: '#9D9D9D',
            400: '#525252',
            500: '#3F3F3F',
            700: '#202020',
            900: '#010101',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
