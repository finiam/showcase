/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: ["Studio Feixen Sans", "sans-serif"],
      fontSize: {
        "f-sm": ["0.75rem", { lineHeight: "auto" }],
        "f-base": ["1.125rem", { lineHeight: "auto" }],
        "f-lg": ["1.25rem", { lineHeight: "auto" }],
        "f-xl": ["1.75rem", { lineHeight: "auto" }],
        "f-2xl": ["3rem", { lineHeight: "3.5rem", letterSpacing: "-.03em" }],
        "f-3xl": ["7rem", { lineHeight: "112%", letterSpacing: "-.03em" }],
      },
      colors: {
        "f-white": "#fff",
        "f-beige": "#F8F1EC",
        "f-dark-gray": "#272727",
        "f-green": "#00524e",
        "f-violet": "#c4b2f6",
        "f-pistachio": "#dedb7b",
        "f-pink": "#fcd5db",
        "f-orange": "#ed7a5f",
      },
      width: {
        layout: "1440px",
      },
    },
  },
  plugins: [],
};
