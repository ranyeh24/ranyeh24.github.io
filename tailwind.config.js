/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html", "./assets/**/*.js"],
  darkMode: ["selector", "[data-web-theme=dark]"],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      fontFamily: {
        heading: [
          "Funnel Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        body: [
          "Inter Tight",
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
        "stacked-waves-1":
          "linear-gradient(315deg, rgba(13, 110, 253, 0.60) 0%, rgba(13, 110, 253, 0.60) 100%), url(../img/stacked-steps-haikei-1.svg)",
        "stacked-waves-2":
          "linear-gradient(315deg, rgba(13, 110, 253, 0.60) 0%, rgba(13, 110, 253, 0.60) 100%), url(../img/stacked-steps-haikei-2.svg)",
        "stacked-waves-3":
          "linear-gradient(315deg, rgba(13, 110, 253, 0.60) 0%, rgba(13, 110, 253, 0.60) 100%), url(../img/stacked-steps-haikei-3.svg)",
        "stacked-waves-4":
          "linear-gradient(315deg, rgba(13, 110, 253, 0.60) 0%, rgba(13, 110, 253, 0.60) 100%), url(../img/stacked-steps-haikei-4.svg)",
      },
      colors: {
        facebook: "#1877f2",
        x: "#14171a",
        twitter: "#1da1f2",
        instagram: "#d62976",
        linkedin: "#0077b5",
        github: "#24292e",
        "github-light": "#fafbfc",
        behance: "#053eff",
        dribbble: "#ea4c89",
        whatsapp: "#25d366",
        email: "#b00",
        primary: {
          DEFAULT: "#0d6efd",
          light: {
            1: "#fcfdff",
            2: "#f5f9ff",
            3: "#e9f3ff",
            4: "#daebff",
            5: "#c8e1ff",
            6: "#b3d4ff",
            7: "#98c2ff",
            8: "#72a8ff",
            9: "#0d6efd",
            10: "#0060ec",
            11: "#0063ef",
            12: "#092f6c",
            a1: "#0055ff03",
            a2: "#0066ff0a",
            a3: "#0074ff16",
            a4: "#0076ff25",
            a5: "#0074ff37",
            a6: "#006fff4c",
            a7: "#0068ff67",
            a8: "#0062ff8d",
            a9: "#0066fdf2",
            a10: "#0060ec",
            a11: "#0063ef",
            a12: "#002767f6",
          },
          dark: {
            1: "#09111e",
            2: "#0e1828",
            3: "#0c254e",
            4: "#092e6a",
            5: "#0f397e",
            6: "#19468f",
            7: "#2153a5",
            8: "#2762c3",
            9: "#0d6efd",
            10: "#005fed",
            11: "#81b6ff",
            12: "#cde3ff",
            a1: "#0012fe0e",
            a2: "#0059fc19",
            a3: "#005efd42",
            a4: "#005efd60",
            a5: "#0d69ff75",
            a6: "#2176ff87",
            a7: "#2b7bff9f",
            a8: "#2f7effbf",
            a9: "#0d6ffffd",
            a10: "#0066ffec",
            a11: "#81b6ff",
            a12: "#cde3ff",
          },
        },
        body: {
          light: {
            1: "#fcfcfd",
            2: "#f9f9fb",
            3: "#eff0f3",
            4: "#e7e8ec",
            5: "#e0e1e6",
            6: "#d8d9e0",
            7: "#cdced7",
            8: "#b9bbc6",
            9: "#8b8d98",
            10: "#80828d",
            11: "#62636c",
            12: "#1e1f24",
            a1: "#00005503",
            a2: "#00005506",
            a3: "#00104010",
            a4: "#000b3618",
            a5: "#0009321f",
            a6: "#00073527",
            a7: "#00063332",
            a8: "#00083046",
            a9: "#00051d74",
            a10: "#00051b7f",
            a11: "#0002119d",
            a12: "#000107e1",
          },
          dark: {
            1: "#111113",
            2: "#19191b",
            3: "#222325",
            4: "#292a2e",
            5: "#303136",
            6: "#393a40",
            7: "#46484f",
            8: "#5f606a",
            9: "#6c6e79",
            10: "#797b86",
            11: "#b2b3bd",
            12: "#eeeef0",
            a1: "#1111bb03",
            a2: "#cbcbf90b",
            a3: "#d6e2f916",
            a4: "#d1d9f920",
            a5: "#d7ddfd28",
            a6: "#d9defc33",
            a7: "#dae2fd43",
            a8: "#e0e3fd60",
            a9: "#e0e4fd70",
            a10: "#e3e7fd7e",
            a11: "#eff0feb9",
            a12: "#fdfdffef",
          },
        },
      },
      boxShadow: {
        navbar: "0px 0px 29px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
