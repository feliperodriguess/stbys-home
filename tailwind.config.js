/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        sm: "0.25rem",
      },
      boxShadow: {
        xl: "0 2px 4px 0 rgba(0,0,0,.1)",
      },
      colors: {
        blue: {
          900: "#23448d",
        },
        cyan: {
          1000: "#00253e",
        },
        gray: {
          100: "#f1f1f1",
          200: "hsla(0,0%,100%,.9)",
          250: "#ebebeb",
          700: "#748794",
          800: "#6b6b6b",
          900: "#979797",
          1000: "#333333",
        },
        yellow: {
          1000: "#c29b40",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair-display)"],
      },
      fontSize: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
