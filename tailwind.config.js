/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      wordSpacing: {
        thinner: "-40px",
        thin: "-0.40em",
        wide: "0.25em",
        wider: "0.5em",
        widest: "1em",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      Object.entries(theme("wordSpacing")).forEach(([key, value]) => {
        const className = `.word-spacing-${e(key)}`;
        newUtilities[className] = { wordSpacing: value };
      });
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
