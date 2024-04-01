/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        22: "88px",
        68: "272px",
        88: "352px",
        110: "440px",
        117: "464px",
        150: "600px",
        220: "880px",
      },
      width: {
        22: "88px",
      },
      // animation: {
      //   "spin-slow": "spin 3s linear infinite",
      //   "bounce-slow": "bounce 1.5s infinite",
      // },
      colors: {
        primaryLight: "#154ede",
        secondaryLight: "#00b1fd",
        tertiaryLight: "#0C0FF4",
        primaryDark: "#ff8008",
        secondaryDark: "#ffc837",
        tertiaryDark: "#F1C409",
      },
      dropShadow: {
        "5xl": "1px 1px 1px #7f7f7f",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      textDecorationThickness: {
        4: "4px", // Puedes ajustar el grosor según tus preferencias
      },
      animation: {
        "bounce-slow": "bounce 1.2s ease-in-out",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".thick-underline": {
          "text-decoration-thickness": "3px", // Ajusta el grosor según lo definido en textDecorationThickness
        },
      };
      addUtilities(newUtilities, ["hover"]);
    }),
    plugin(function ({ addVariant, e }) {
      addVariant("hover", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`hover${separator}${className}`)}:hover`;
        });
      });
    }),
  ],
};
