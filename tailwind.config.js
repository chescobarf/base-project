module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#212559',
          800: '#141c52e6',
          700: '#141c52cc',
          600: '#141c52b3',
          500: '#141c5299',
          400: '#141c5280',
          300: '#141c5266',
          200: '#141c524d',
          100: '#141c5233',
        },
        secondary: {
          900: '#BA0B7C',
          800: '#d40f7de6',
          700: '#d40f7dcc',
          600: '#d40f7db3',
          500: '#d40f7d99',
          400: '#d40f7d80',
          300: '#d40f7d66',
          200: '#d40f7d4d',
          100: '#d40f7d33',
        },
        black: {
          100: '#121820',
          50: '#10192180',
          25: '#10192140',
        }
      }
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`
  ]
}
