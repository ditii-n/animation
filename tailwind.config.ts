/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./partials/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(purple|red|turquoise)/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/img/header.png')",
        thick: "url('/img/thick-gradient-line.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        // purple: '#9966ff', 
        // red: '#ff006',
        // turquoise: '#33cccc'
      },
      content: {
        'plus': "+",
        // 'plus': "&#43",
        // 'plus': "\002B",
        // 'plus': "\u002B",
      },
      keyframes: {
        upwards: {
          "100%": { transform: "translateY(-200%)", opacity: 0 },
          '90%': { opacity: 1 },
          '10%': { opacity: 1 },
          '0%': { transform: 'translateY(200%)', opacity: 0 }
        },
      },
      animation: {
        "meteor": "upwards 1.6s linear infinite",
        "meteor-b": "upwards 1.9s linear infinite",
        "meteor-c": "upwards 2.2s linear infinite",
      },
    },
  },
  plugins: [],
};
export {}