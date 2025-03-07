import { heroui } from '@heroui/react';

const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'hsla(221,28%,43%,.3)'
      },
      borderRadius: {
        '4xl': '2.5rem'
      },
      maxWidth: {
        'screen-3xl': '1840px'
      },
      transitionDuration: {
        DEFAULT: '350ms'
      },
      transitionTimingFunction: {
        // DEFAULT: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
      },
      colors: {
        accent: 'var(--color-accent)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)'
      },
      fontFamily: {
        jakarta: 'var(--font-jakarta)'
      }
    }
  },
  plugins: [heroui(), addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars
  });
}
