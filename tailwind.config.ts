/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      jakarta: ["Plus Jakarta Sans", 'sans-serif'],
      magistral: ['Magistral', 'sans-serif'],

    },
    extend: {
  backgroundSize: {
    '300-y': '100% 300%',
  },
      keyframes: {
        "loop-scroll": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollImage: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-120vw)" },
        },
        underline: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
         glow: {
          '0%, 100%': { borderColor: '#FF9900', boxShadow: '0 0 8px #FF9900' },
          '50%': { borderColor: '#FF6600', boxShadow: '0 0 20px #FF6600' },
        },       
        'gradient-y': {
      '0%, 100%': {
        backgroundPosition: '50% 0%',
      },
      '50%': {
        backgroundPosition: '50% 100%',
      },
    }, 
      },
      animation: {
        "loop-scroll": "loop-scroll 20s linear infinite",
        underline: "underline 0.5s ease-in-out forwards",
        glow: 'glow 2s ease-in-out infinite',
        'gradient-y': 'gradient-y 4s ease infinite',
      },
        backgroundImage: {
    'rainbow-glow': 'linear-gradient(to top, #f5ce62, #e43603, #fa7199, #e85a19)',
  },
  backgroundPosition: {
    'animated': '0% 50%',
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
      screens: {
        'sm': '400px',
        'md': '1024px',
        'md2': '1080px',
        'lg': '1920px',
        "mdt": "768px",

      },
      width: {
        'md': '1024px',
        "mdt": "768px",
        'lg': '1300px',
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
  plugins: [
    require('tailwind-scrollbar')
  ],
};