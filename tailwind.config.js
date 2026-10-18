module.exports = {
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './layouts/**/*.vue'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#123f70',
        navyDeep: '#103e70',
        linkBlue: '#0068b7',
        bankOrange: '#f5820b',
        skyBank: '#a8d3f5'
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica Neue', 'sans-serif']
      },
      boxShadow: {
        panel: '0 2px 7px rgba(0,0,0,.22)'
      }
    }
  },
  plugins: []
}