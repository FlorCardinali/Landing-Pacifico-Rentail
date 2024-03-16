/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: { 
        backColor: "#bbb3a0",
        fontColor: "#4D3821",
        myGreen: "#4a8446",
        details: "#74634c",
        detailsDark: "#5c513a",
        light: "#ddddd2",
        shadow: "#39311d"
      }    
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
        
    
}

