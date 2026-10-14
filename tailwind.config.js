export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5B800",
        secondary: "#1F6FA5",
        brand: {
          50: "#EFF8FC",
          100: "#D9EEF7",
          200: "#B7DFF0",
          300: "#8CCBE4",
          400: "#63B5D6",
          500: "#43A0C8",
          600: "#338DB8",
          700: "#2A7AA3",
          800: "#246D93",
          900: "#1F6FA5"
        },
        accent: {
          100: "#FFF9DB",
          200: "#FDEFA9",
          300: "#F9DF6A",
          400: "#F5B800",
          500: "#D99F00",
          600: "#B57F00"
        },
        tech: {
          400: "#5AA9D1",
          500: "#1F6FA5"
        }
      },
      boxShadow: {
        card: "0 14px 30px rgba(31, 111, 165, 0.12)",
        glow: "0 0 24px rgba(245, 184, 0, 0.35)"
      }
    }
  },
  plugins: []
};
