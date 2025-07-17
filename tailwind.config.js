/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.html",
    "./public/**/*.html",
    "./build/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#3b82f6",
          700: "#1d4ed8",
        },
        gray: {
          100: "#f3f4f6",
          600: "#4b5563",
          800: "#1f2937",
        },
      },
      fontSize: {
        xl: "1.25rem",
        sm: "0.875rem",
      },
      spacing: {
        2: "0.5rem",
        4: "1rem",
      },
      fontWeight: {
        bold: "700",
      },
    },
  },
  plugins: [],
};
