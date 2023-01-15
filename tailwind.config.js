/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        "first-color-palette": "#202225",
        "second-color-palette": "#292b2f",
        "third-color-palette": "#2f3136",
        "fourth-color-palette": "#36393f",
        "light-gray": "#d3d3d3",
        "user-color": "#7289da",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  mode: "jit",
  plugins: [],
};
