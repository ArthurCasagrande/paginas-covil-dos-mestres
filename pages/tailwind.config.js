/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navy': '#0F3D6B',
        'acqua': '#097480',
        'crimson': '#8E0000',
        'leaf': '#7ED321',
        'concrete': {
          200: '#E2DCDB',
          400: '#BBB6B5',
        },
      },
    },
  },
  plugins: [],
}
