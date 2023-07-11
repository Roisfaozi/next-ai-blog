/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        width: 'width',
        height: 'height',
      },
      boxShadow: {
        poster: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
      },
      colors: {
        dark: '#090D1F',
        textdark: '#1A1A1A',
      },
      animation: {
        burger: 'disapear 500ms ease-in-out',
        apear: 'disapear 500ms ease-in-out',
      },
      keyframes: {
        disapear: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '25%': { transform: 'scale(0.25);', opacity: '0.25' },
          '50%': { transform: 'scale(0.5)', opacity: '0.5' },
          '75%': { transform: 'scale(0.75);', opacity: '0.75' },
          '100%': { transform: 'scale(1);', opacity: '1' },
        },
        apear: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '25%': { transform: 'scale(0.75);', opacity: '0.5' },
          '50%': { transform: 'scale(0.5)', opacity: '0.5' },
          '75%': { transform: 'scale(75);', opacity: '75' },
          '100%': { transform: 'scale(0);', opacity: '0' },
        },
      },
    },
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  darkMode: 'class',
  plugins: [],
}
