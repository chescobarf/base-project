module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#212559',
          800: '#212459',
          700: '#4c4f79',
          600: '#767993',
          500: '#dbdde2',
          400: '#141c5280',
          300: '#141c5266',
          200: '#141c524d',
          100: '#141c5233',
        },
        secondary: {
          900: '#BA0B7C',
          800: '#cb4a9b',
          700: '#e7c0d9',
          600: '#ffe0f4',
          500: '#d40f7d99',
          400: '#d40f7d80',
          300: '#d40f7d66',
          200: '#d40f7d4d',
          100: '#d40f7d33',
        },
        black: {
          100: '#121820',
          50: '#7b7e82',
          25: '#f1f1f3',
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
