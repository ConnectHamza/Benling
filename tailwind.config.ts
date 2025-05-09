/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'], // Add your custom font here
      jakarta: ['Jakarta', 'sans-serif'], // Add your custom font here
      magistral: ['Magistral', 'sans-serif'],

    },
    extend: {

      keyframes: {
        scrollImage: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      
      colors: {
        crownOrange: '#F15C2A',

        black: {
          100: '#000',
          200: '#0c0b09',
          70: '#121212',
          50: '#232323',
          30: '#0A0A0A',          
        },
        gray: {
          10: '#F6F6F6',
          20: '#A2A2A2',
          30: '#CECECE',
          50: '#F0FDFA',
          90: '#62a590',
          100: '#E7E7E7',
          200: '#776D57',
          300: '#32cfb8',
        },
        red: {
          100: '#FF7700',
          200: '#F15822',
          300: '#F31C09',
          400: '#AB1609',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      animation: {
        underline: 'underline 0.5s ease-in-out forwards',
      },
      screens: {
        'sm': '400px',
        'md': '1024px',  
        'lg': '1920px',       
      },
      width: {
        'md': '1024px',
        'lg': '1200px',
        'full': '100%',
      },
      borderRadius: {
        '5': '5px',
        '10': '10px',
        '20': '20px',
        '30': '30px',        
      },
    },
  },
  plugins: [],
};