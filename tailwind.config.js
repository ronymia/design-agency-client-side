/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["'Poppins', sans-serif"]
      }
      ,
      colors: {
        primary: "#111430",
        secondary: "#7AB259",
        gray: "#474747",
        blue: "#171B4E",
        yellow: "#FBD062",
        success: "#009444",
        warning: "#FFBD3E",
        error: "#FF4545",
      }
    },
  },
  plugins: [],
}

