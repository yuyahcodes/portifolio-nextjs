/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3f3f3",
        secondary: "#122c34",
        tertiary: "#fff",
        dark:"#333333",
        light:"#f5f5f5",
        sun:"#FCE570",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #122c34",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // "hero-pattern": "url('/src/assets/herobg.png')",
        "circular-light": "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #edf2f8 5px, #edf2f8 100px)",
      }
    },
  },

  plugins: [],
}
