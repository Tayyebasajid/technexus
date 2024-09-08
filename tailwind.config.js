/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [   "./dist/*.html" ,
    "./dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'pink': '#EF233C',
        'whitee': '#FFFFFF',
        'gray':'#B6B6B6' ,
        'blue': '#222432',
        'darkg':'#8D99AE',
        'darkb' : '#3B3F4F',
        'black2':'#2A2E3B',
        'dblue':'#232323',
        'bgblue':'#1E202E',
        'ggray':'#313843',
        'nblue':'#020035',
        'dgray':'#FFFFFF0A'
      },
      fontFamily: {
        'saira' : ['Saira', 'sans-serif'] ,
        
      }
    
    },
  },
  plugins: [],
}
