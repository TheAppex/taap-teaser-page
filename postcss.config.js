const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    taildwindcss('./tailwind.js'),
    require('autoprefixer'),
  ],
}