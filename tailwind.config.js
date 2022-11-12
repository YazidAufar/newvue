const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'warm-gray': colors.warmGray,
        sky: colors.sky,
        cyan: colors.cyan,
      },
      fontFamily: {
        'sans': ['Inter', 'Sans-serif']
      },
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}
