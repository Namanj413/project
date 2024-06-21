/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "inter"],
      },
      animation: {
        // You can name the animation whatever you want
        "spin-slow": "spin 10s linear infinite",
        "fade-up-once": "fadeUpOnce 500ms ease-in-out forwards",
        "fade-down-once": "fadeDownOnce 500ms ease-in-out forwards",
        "fade-down": "fadeDown 800ms ease-in-out forwards",
        "fade-up": "fadeUp 800ms ease-in-out forwards",
        "fade-up4s": "fadeUp 4s ease-in-out forwards",
        "fade-left": "fadeLeft 1s linear forwards",
        "fade-right": "fadeRight 1s linear forwards",
        "fade-in": "fadeIn 300ms",
        "fade-zoom-in": "fadeZoomIn 3s ease-in-out",
        "fade-rise-bottom-top": "fadeRiseBottomTop 800ms ease-in-out",
        "fade-out": "fadeOut 1s ease-in-out forwards",
        "fadetemp":"fadeIn 1.5s cubic-bezier(0.18, 0.32, 0.17, 0.99)"
      },
      keyframes: {
        fadeUpOnce: {
          "0%": { opacity: "0", transform: "translateY(1000px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp4s: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDownOnce: {
          "0%": { opacity: "0", transform: "translateY(-1000px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-1000px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(1000px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateX(1000px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }   
         
        },
        fadetemp: {
          "0%": { opacity: "0" },
          "100%" :{ opacity: "1" }  
         
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeZoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.4)",
          },
          "50%": {
            opacity: "0.8",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },custo:{
" 0%": {
    clip:"inset(0 0 0 0)",
    opacity:"1"
  },
  "100%":{
    clip:"inset(0)",
    opacity: "1"
  }
        },
        fadeRiseBottomTop: {
          from: {
            transform: "translateY(100%)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lp: "1080px",
      xl: "1280px",
      xxl: "1536px",
      "3xl": "1728px",
    },
  },
  plugins: [],
};
