module.exports = {                                                                                                                                     
  content: ['./src/**/*.{js,ts,jsx,tsx}'],                                                                                                                                                                                                                                                                                                      
  plugins: [require("daisyui")],         
  daisyui: {
    themes: ["synthwave",
      {
        custom: {
          "primary": "#7dd3fc",
          "secondary": "#fed7aa",
          "accent": "#fca5a5",
          "neutral": "#a5f3fc",
          "base-100": "#faffe1",   
          "info": "#0ea5e9",
          "success": "#a3e635",
          "warning": "#fbbf24",
          "error": "#f87171",
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },                                                                                           
};