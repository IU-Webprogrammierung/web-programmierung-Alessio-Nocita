/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "./pages/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    "button-white",
    "button-black",
    "button-disabled"
  ],
  theme: {
    screens: {
      "phone": "360px",
      "tablet": "480px",
      "laptop": "769px",
      "desktop": "1080px",
      "desktop-xl": "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
        futura: ["Futura-pt", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#333",
        secondary: "#f0f0f0",
        tertiary: "#616b3a",
      }
    },
  },
  plugins: [],
}

