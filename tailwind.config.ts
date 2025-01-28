import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");
const config: Config ={
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./compons/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	"./components/**/*.{js,ts,jsx,tsx,mdx}",
	flowbite.content(),
  ],
  theme: {
    extend: {
    colors:{
      mainColor:"#1F2937",
    },
    boxShadow:{
      shadow:"0 0px 8px #3B82F6"
    },
    keyframes:{
      bounceCustome:{
       '0%':{transform:'rotate(0deg)'},
       '100%':{transform:'rotate(360deg)'},
      },
  },
  animation:{
    bounceCustome:'bounceCustome 1s linear infinite'
  }
},
  },
  plugins: [
	require("tailwindcss-animate"),
	 flowbite
  ]
}
export default  config
