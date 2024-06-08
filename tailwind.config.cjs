module.exports = {
  content: ["./slices/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Nunito Sans Variable", "sans-serif"],
        header: ["Nunito Variable", "sans"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};
