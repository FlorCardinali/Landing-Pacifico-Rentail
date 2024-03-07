/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: { 
        backColor: "#bbb3a0",
        fontColor: "#4D3821",
        myGreen: "#97a82a",
        details: "#74634c",
        detailsDark: "#5c513a",
        light: "#ddddd2",
        shadow: "#39311d"
      }    
    },
  },
  plugins: [],
}

