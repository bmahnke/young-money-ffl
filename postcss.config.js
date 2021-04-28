const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano')

module.exports = ({
  plugins: [
    require('tailwindcss'),
    process.env.NODE_ENV === 'production' ? require('autoprefixer') : null,
    process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
    purgecss({
      content: ['./layouts/**/*.html', './src/**/*.svelte'],
      css: ['src/css/**/*.css'],
      safelist: {
        standard: [/^bg-(red|green|white|black|yellow|blue)/, /^text-(red|green|white|black|yellow|blue)/, /^border-(red|green|white|black|yellow|blue)/]
      },
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
})