/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        '80t': '80%',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

