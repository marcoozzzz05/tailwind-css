 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primary: '#118425',
        myblue: '#33c0fd',
        myred: '#c2290c',
        titoli: '#A3E635',
        paragrafi: '#A855F7',
        link: '#DC2626',
    },
    spacing: {
        padding: "20px",
        margin: "15px",
    }
    },
  },
  plugins: [],
}

