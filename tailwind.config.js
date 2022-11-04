/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#2936AC',
          secondary: '#E8E8F3',
          accent: '#042343',
          info: '#547FC9',
          success: '#05A753',
          warning: '#FF8F6B',
          error: '#E51919',
          'base-content': '#202020'
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#2936AC',
          secondary: '#E8E8F3',
          accent: '#042343',
          info: '#547FC9',
          success: '#05A753',
          warning: '#FF8F6B',
          error: '#E51919',
          'base-content': '#FAFAFA',
          'base-100': '#202020',
          'base-200': '#182c34',
          'base-300': '#122126'
        }
      }
    ]
  },
  plugins: [require('daisyui')],
  theme: {
    container: {
      center: true
    }
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ]
}
