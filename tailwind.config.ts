/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif'],
      'jost': ['"Jost"', 'sans-serif'],
      'poppins': ['"Poppins"', 'sans-serif'],
      'edu': ['"Edu AU VIC WA NT Pre"', 'sans-serif'],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      colors: {
        'navbar': '#081108',
        'primary': '#0f2310',
      },
    },
  },
  plugins: [],
}