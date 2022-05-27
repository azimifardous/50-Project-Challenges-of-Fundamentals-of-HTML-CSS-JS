module.exports = {
  content: ["src/input.css", "public/index.html", "public/app.js", "public/output.css"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif']
      },
      colors: {
        'soft-red': 'hsl(10, 79%, 65%)',
        'soft-red-hv': 'hsl(10, 79%, 70%)',
        'cyan-me': 'hsl(186, 34%, 60%)',
        'cyan-me-hv': 'hsl(186, 34%, 70%)',
        'darkBrown': 'hsl(25, 47%, 15%)',
        'mediumBrown': 'hsl(28, 10%, 53%)',
        'cream': 'hsl(27, 66%, 92%)',
        'veryPaleOrange': 'hsl(33, 100%, 98%)'
      },
      width: {
        '82': '350px',
        '100': '500px'
      }
    },
  },
  plugins: [],
}
