/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    plugins: [],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          'xlp': '1900px',
        },
        colors: {
          'bg-dark': {
            800: "#1f1f1f",
            900: "#191919",
          },
          'primary': {
            100: "#F9E5E9",
            200: "#F0B2B9",
            300: "#E67A8A",
            400: "#D45B64",
            500: "#750E21",
            600: "#6B0B1D",
            700: "#610A1A",
            800: "#580816",
            900: "#4E0712",
        },
        'time-start': {
          100: '#F1A84D',
          200: '#E09A2E',
          300: '#D68C1E',
          400: '#CD7F0E',
          500: '#E3651D',
          600: '#C2581B',
          700: '#A24C1A',
          800: '#7B3E16',
          900: '#5A3013',
        },
        'time-end': {
          100: '#D2E6A7',
          200: '#B5DB7E',
          300: '#98D155',
          400: '#7DC133',
          500: '#BED754',
          600: '#A8C14E',
          700: '#8BAA3A',
          800: '#6F922A',
          900: '#56701D',
        },
        'warning': "#ff8000"
      } 
    }
  }
};