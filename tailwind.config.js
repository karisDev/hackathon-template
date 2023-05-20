import tailwindThemer from "tailwindcss-themer";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [
    tailwindThemer({
      themes: [
        {
          name: "dark",
          extend: {
            colors: {
              primary: "blue",
              text: {
                main: "#fafafa",
              },
              bg: {
                primary: "#191919",
              },
            },
          },
        },
        {
          name: "light",
          extend: {
            colors: {
              primary: "red",
              text: {
                main: "#191919",
              },
              bg: {
                primary: "#fafafa",
              },
            },
          },
        },
      ],
    }),
  ],
};
