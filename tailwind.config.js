/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#476EAE',
          teal: '#48B3AF',
          mint: '#A7E399',
          lime: '#F6FF99',
        },
      },
      backgroundImage: {
        'gradient-editorial': 'linear-gradient(135deg, #476EAE 0%, #48B3AF 50%, #A7E399 100%)',
        'gradient-hero': 'linear-gradient(165deg, #48B3AF 0%, #A7E399 50%, #F6FF99 100%)',
        'gradient-teal-mint': 'linear-gradient(120deg, #48B3AF 0%, #A7E399 100%)',
        'gradient-mint-lime': 'linear-gradient(90deg, #A7E399 0%, #F6FF99 100%)',
        'gradient-blue-teal': 'linear-gradient(135deg, #476EAE 0%, #48B3AF 100%)',
        'gradient-dark': 'linear-gradient(135deg, rgba(71, 110, 174, 0.2) 0%, rgba(72, 179, 175, 0.2) 50%, rgba(167, 227, 153, 0.2) 100%)',
      },
      fontFamily: {
        headline: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'editorial-xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'editorial-lg': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'editorial-md': ['4rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'editorial-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};
