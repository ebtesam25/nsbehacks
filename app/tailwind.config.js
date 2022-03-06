module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#713f12",
        
"secondary": "#f3f4f6",
        
"accent": "#1c1917",
        
"neutral": "#191D24",
        
"base-100": "#2A303C",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require('daisyui'),require('@tailwindcss/aspect-ratio')],
}