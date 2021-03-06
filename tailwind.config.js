module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#272829',
        container: '#0A1929',
        neutral: '#1d2530',
        accent: '#007FFF',
        accent_hover: '#0059B2',
        text: '#D5E8FC',
        text_hover: '#071A2F',
        hover: '#334155',
      },
      fontFamily: {
        body: ['Source Sans Pro'],
        title: ['Lexend Deca'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s linear infinite',
        'pulse-medium': 'pulse 2s linear infinite',
        'pulse-high': 'pulse 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}
