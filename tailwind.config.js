module.exports = {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope'],
      },
    },
    colors: {
      "Light-Cyan": "hsl(193, 38%, 86%)",
      "Neon-Green": "hsl(150, 100%, 66%)",
      "Grayish-Blue": "hsl(217, 19%, 38%)",
      "Dark-Blue": "hsl(217, 19%, 24%)"
    }
  },
  plugins: [],
}
