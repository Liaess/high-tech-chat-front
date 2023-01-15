/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/templates/**/*.{js,ts,jsx,tsx}",
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
        "first-color-palette": "#212529",
        "second-color-palette": "#282b30",
        "third-color-palette": "#36393e",
        "fourth-color-palette": "#424549",
        "light-gray": "#d3d3d3",
        "user-color": "#7289da",
        "link-color":
          "hsl(197, calc(var(--saturation-factor, 1) * 100%), 47.8%);",
      },
    },
  },
  mode: "jit",
  plugins: [],
};
