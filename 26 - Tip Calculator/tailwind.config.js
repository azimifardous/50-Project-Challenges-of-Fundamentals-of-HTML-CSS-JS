module.exports = {
  content: ["src/style.css", "public/style.css", "public/index.html", "public/index.js"],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Mono"'],
      },
      colors: {
        'strongcyan': 'hsl(172, 67%, 45%)',
        'verydarkcyan': 'hsl(183, 100%, 15%)',
        'grayishcyan': 'hsl(184, 14%, 56%)',
        'darkgrayishcyan': 'hsl(186, 14%, 43%)',
        'lightgrayishcyan': 'hsl(185, 41%, 84%)',
        'verylightgrayishcyan': 'hsl(189, 41%, 97%)',
        'whitex': 'hsl(0, 0%, 100%)',
      },
      spacing: {
        '700': '700px'
      }
    },
    plugins: [],
  }
}
