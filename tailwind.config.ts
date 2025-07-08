// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#1e1e1e",
          card: "#2d2d2d",
          navbar: "rgba(30, 30, 30, 0.8)",
        },
        text: {
          main: "#e0e0e0",
          secondary: "#a0a0a0",
        },
        accent: "#00ffff",
        border: "#444",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
    },
  },
  fonts: {
    provider: "google"
  },
  plugins: [],
};
