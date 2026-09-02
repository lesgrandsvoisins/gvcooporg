/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./home/**/*.{html,js,ts,jsx,tsx}",
    "./mysite/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#FFF8F0', /* Beige doux (remplace le marron sombre) */
          primary: '#EF5C6D', /* Sea Pink chaleureux pour l'artisanat */
          dark: '#2A1D12', /* Brun ardoise (contraste élevé pour la lecture) */
          accent: '#4C85D0' /* Bleu doux pour les liens techniques */
        },
        'sea-pink': {
          50: "#FDF1F2",
          100: "#FBE6E7",
          200: "#F8CDD0",
          300: "#F4AFB4",
          400: "#F2949C",
          500: "#EF5C6D",
          600: "#D03149",
          700: "#A02337",
          800: "#701523",
          900: "#420912",
          950: "#2D0409"
        },
        'st-tropaz': {
          50: "#ECF1FB",
          100: "#DDE5F9",
          200: "#BACDF3",
          300: "#94B4ED",
          400: "#6A9DE7",
          500: "#4C85D0",
          600: "#3E6EAE",
          700: "#30588C",
          800: "#1F3C62",
          900: "#0E2037",
          950: "#071425"
        },
        'leather': {
          50: "#FAF2ED",
          100: "#F4E2D6",
          200: "#EAC5A9",
          300: "#E2AB7B",
          400: "#C4946A",
          500: "#A77E5A",
          600: "#8C694A",
          700: "#684D35",
          800: "#493524",
          900: "#2A1D12",
          950: "#1B1109"
        }
      }
    }
  },
  plugins: [],
}
