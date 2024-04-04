const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#F2F2F2",
        secondary: "#0A0217",
      },
      fontFamily: {
        sans: "var(--font-poppins)",
        alt: "var(--font-big)",
      },
      textColor: {
        primary: "#F2F2F2",
        secondary: "#0A0217",
        emphasis: "#00ffff"
      },
    },
  },
  plugins: [],
};
export default config;
