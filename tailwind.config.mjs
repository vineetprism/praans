/** @type {import('tailwindcss').Config} */
const config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}", // if you have a src folder
    ],
    theme: {
      extend: {
        colors: {
          primary: "#eb8535",
        },
      },
    },
    plugins: [],
  }
  
  export default config
  