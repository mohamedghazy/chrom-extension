/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'white', // Customize the primary background color
      },
    },
  },
  plugins: [require('daisyui')],
};
