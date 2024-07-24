import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'custom-bg': "url('bg.png')",
      }),
      fontFamily:{
        logotext:["Lobster", "sans-serif"],
        inter : ["Inter", "sans-serif"],
        kanit : ["Kanit", "sans-serif"],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],

};
export default config;
