/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#b3e5fc",
        "medium-blue": "#29b6f6",
        "light-green": "#c8e6c9",
        "medium-green": "#81c784",
        "earth-brown": "#8d6e63",
      },
      fontFamily: {
        abril: ["Abril Fatface", "cursive"],
        heebo: ["Heebo", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        md: "3px 3px 6px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".text-shadow": {
            "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-md": {
            "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.5)",
          },
          ".text-shadow-lg": {
            "text-shadow": "4px 4px 8px rgba(0, 0, 0, 0.5)",
          },

          // TEXTS
          ".subtitle-sm": {
            "@apply uppercase text-slate-100 text-base font-raleway": {},
          },
          ".subtitle-md": {
            "@apply uppercase text-slate-100 text-xl font-raleway": {},
          },

          ".title-sm": {
            "@apply font-abril uppercase text-3xl mb-4 text-slate-100": {},
          },
          ".title-md": {
            "@apply font-abril uppercase text-5xl mb-4 text-slate-100": {},
          },
          ".title-section": {
            "@apply text-3xl mb-10 font-abril": {},
          },
          ".title-section--lg": {
            "@apply text-3xl mb-10 font-abril": {},
          },
          ".title-section--lg": {
            "@apply text-4xl mb-10 font-abril": {},
          },

          // SLIDING FORM
          ".title-form": {
            "@apply text-2xl font-semibold mb-4 tracking-wider font-abril": {},
          },
          ".button-form--base": {
            "@apply p-2 w-full text-left font-raleway block text-lg": {},
          },
          ".button-form--hover": {
            "@apply hover:bg-slate-200 hover:text-black": {},
          },
          ".button-form--selected": {
            "@apply bg-black text-white": {},
          },
          ".button-form--unselected": {
            "@apply bg-white text-black": {},
          },
          ".paragraph-form": {
            "@apply text-sm mt-2 font-heebo": {},
          },
          ".next-button": {
            "@apply border-2 border-black tracking-wider uppercase py-1 px-2 hover:text-white hover:bg-black transform transition-transform duration-300":
              {},
          },
          ".button-reserve": {
            "@apply mt-10 border-2 border-black tracking-wider font-bold uppercase py-5 px-8 hover:text-white hover:bg-black   transform transition-transform duration-300":
              {},
          },
          ".button-nav--mobile": {
            "@apply tracking-wider text-sm italic font-heebo text-black uppercase py-2 px-8 hover:text-white hover:bg-black   transform transition-transform duration-300":
              {},
          },
          ".button-form": {
            "@apply border-2 border-black tracking-wider uppercase py-1 px-2 bg-black text-white hover:text-black hover:bg-white transform transition-transform duration-300":
              {},
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
