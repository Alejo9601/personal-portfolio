/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "selector",
   content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
   theme: {
      extend: {
         fontFamily: {
            outfit: ["Outfit", "sans-serif"],
         },
         colors: {
            "dark-tiles-color": "#161b1d",
            "light-tiles-color": "#f0f3f4",
            "dark-back-color": "#000000",
            "light-back-color": "#ffffff",
         },
      },
   },
   plugins: [],
};
