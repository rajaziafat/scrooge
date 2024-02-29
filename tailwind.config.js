const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        goldBtn: "#EBB707",
        darkBlue: "#1E2439",
        body: "#1C1421",
        dark: "#0F1118",
        orange: "#FFA042",
      },
      boxShadow: {
        hero: "0px -4px 128px #6C3D8D",
        btn: "0px 17px 0px #141E3F",
        shadowTeam: "0px 2px 36px -6px #4F6BCB",
      },
      dropShadow: {
        grabBox: "0px 3px 14px #7A4F95",
      },
      backgroundImage: {
        borderGr: "linear-gradient(90deg, #FFB02C 0%, #FC1B5E 106.47%)",
        grab1:
          "linear-gradient(143.3deg, #9442C7 3.46%, rgba(39, 28, 46, 0) 96.98%)",
        teamBorder: "linear-gradient(180deg, #AF8AFF 0%, #FF81FA 100%)",
        teamGr:
          "linear-gradient(157.86deg, rgba(242, 242, 242, 0.45) 2.35%, rgba(242, 242, 242, 0.34) 100%)",
        // roadmapGr:
        //   "linear-gradient(#27212A 0 0) padding-box, linear-gradient(90deg, #FFB02C 0%, #FC1B5E 106.47%) border-box;",
      },
      fontFamily: {
        sans: ["Cinzel", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
