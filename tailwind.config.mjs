// tailwind.config.mjs
import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import lineClamp from "@tailwindcss/line-clamp"
import aspectRatio from "@tailwindcss/aspect-ratio"

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
    },
    extend: {
    
      screens: {
        xs: "360px",
        "3xl": "1920px",
      },
      colors: {
        primary: "#eb8535",
      },
      fontFamily: {
        sans: [
          'Geist Sans', 'Arial', 'sans-serif'
        ],
      },
    },
  },
  plugins: [forms, typography, lineClamp, aspectRatio],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

export default config
