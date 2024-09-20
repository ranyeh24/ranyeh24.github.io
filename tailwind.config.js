/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.{html,php}", "./pages/*.{html,php"],
  darkMode: ["selector", "[data-theme-mode=dark]"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        heading: [
          "Lexend",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        code: [
          "Fira Code",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      backgroundImage: {
        // cta: "linear-gradient(315deg, rgba(247, 0, 121, 0.75) 0%, rgba(247, 0, 36, 0.75) 100%), url(../img/call-to-action.jpg)",
        // newsletter:
        //   "linear-gradient(315deg, rgba(247, 0, 121, 0.75) 0%, rgba(247, 0, 36, 0.75) 100%), url(../img/newsletter.jpg)",
        "gradient-0": "linear-gradient(0deg, #3e7fde 0%, #3e48de 100%)",
        "gradient-45": "linear-gradient(45deg, #3e7fde 0%, #3e48de 100%)",
        "gradient-90": "linear-gradient(90deg, #3e7fde 0%, #3e48de 100%)",
        "gradient-180": "linear-gradient(180deg, #3e7fde 0%, #3e48de 100%)",
      },
    },
  },
  plugins: [],
};
