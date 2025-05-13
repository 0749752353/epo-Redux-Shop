export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: 'class',
    theme: {
      extend: {
        screens: {
          "other" : { 'min': '340px', 'max': '1200px' },
        },
        colors: {
          darkMode: "#1e1b4b",
          blue: {
           260: "#0d9488",
          }
        }
      },
    },
    plugins: [],
  }
  