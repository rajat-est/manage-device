/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#36375F",
        primary_light: "#F5F6FA",
        secondary: "#000",
        secondary_light: "#202020;",
        light: "#D9D9D9",
        light_secondary: "rgba(32, 32, 32, 0.50)",
        white: "#fff",
        orange: "#DE7139",
        orange_secondary: "rgba(223, 122, 69, 0.10)",
        red_primary: "#FF8686",
        model_bg: "#000000d1",
      },
      fontSize: {
        ex_sm: "12px",
        sm: "14px",
        md: "1rem",
        xl: "1.125rem",
        "1xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.5rem",
      },
      fontFamily: {
        sans: ["var(--font-DM-Sans)"],
        lato: ["var(--font-Lato)"],
      },
      // lineHeight: {
      //   'extra-loose': '2.5',
      //   '12': '3rem',
      // }
      boxShadow: {
        sm: "0px 4px 15px 0px rgba(0, 0, 0, 0.15)",
        md: " 0px 4px 15px 0px rgba(0, 0, 0, 0.24)",
        lg: " 0px 2.5625px 16.01563px 0px rgba(0, 0, 0, 0.08)",
      },
    },
    screens: {
      ex_sm: "576px",
      sm: "768px",
      md: "992px",
      lg: "1025px",
      xl: "1280px",
    },
  },
  plugins: [],
};
