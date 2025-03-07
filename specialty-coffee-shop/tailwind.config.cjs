/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "phone-xs": {"max": "360px"},
      "phone": {"max": "480px"},
      "tablet": {"max": "768px"},
      "laptop": {"max": "1080px"},
      "desktop": {"max": "1440px"},
    },
    extend: {},
  },
  plugins: [],
}

