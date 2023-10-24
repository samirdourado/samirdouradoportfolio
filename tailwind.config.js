/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
        colors: {
          brand1: '#DAA520',
          brand2: '#88860B',
          brand3: '#FFDE8C',
          brand4: '#FCCE5B',
          brand5: '#FFF3D3',
          grey0: '#0B0D0D',
          grey1: '#212529',
          grey2: '#495057',
          grey3: '#868E96',
          grey4: '#AdB5BD',
          grey5: '#CED4DA',
          grey6: '#DEE2E6',
          grey7: '#E9ECEF',
          grey8: '#F1F3F5',
          grey9: '#F8F9FA',
          grey10: '#FDFDFD',
          whiteFixed: '#FFFFFF', 
          alert1: '#CD2B31',
          sucess1: '#18794E',
        },
        fontSize: {
          s17: '1.0625rem',          
          s20: '1.25rem',
          s24: '1.5rem',
          s32: '2rem',
          s37: '2.3125rem',
          s38: '2.375rem',
          s46: '2.875rem',
          s87: '5.4375rem',
          s128: '8rem',
        },
        screens: {
          // watch: '0',
          // smart: '163px',
          smart: '0',
          tablet: '640px',
          desktop: '1280px'
        }
        
    },
  },
  plugins: [],
}
