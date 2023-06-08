/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        // Class name
        "animation-delay": (value) => {
          return {
            animationDelay: `${value}ms`, // Desired CSS properties here
          };
        },
      });
    }),
  ],
};
