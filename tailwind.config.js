module.exports = {
  purge: {
    enabled: false
  },
  // TAILWIND3: content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    textColor: theme => ({
      'orange': '#FF6400',
      'white': '#FFF',
      'gray-light': '#A3A4A8',
      'light': '#494A4E',
      'black': '#333',
      'green': "#1CD999"
    }),
    backgroundColor: theme => ({
      'black': '#16171B',
      'black-hover': '#2b2d31',
      'black-light': '#202125',
      'orange': '#FF6400',
      'orange-hover': '#d26621',
      'white': '#FFF',
      'green': "#18473A",
      'bg-gray-100': '#'
    }),
    borderColor: theme => ({
      'light': '#494A4E',
      'gray-light': '#A3A4A8',
      'green': "#3DE88C",
      'orange': '#FF6400',
      "white": "#FFF"
    }),
    cursor: theme => ({
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
    }),
    fontFamily: theme => ({
      'Krub': ['Krub'],
      'krub-light': ['Krub-light'],
      'serif': ['Asap'],
      'mono': ['Asap'],
      'Asap': ['Asap'],
      'body': ['Asap'],
      'footer': ['Krub'],
    }),
    minHeight: theme => ({
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
       'screen': '100vh',
       'screen-80': '80vh',
       'screen-40': '40vh'
    }),
    minWidth: theme => ({
       '0': '0',
       '1/4': '25%',
       '1/2': '50%',
       '3/4': '75%',
       'full': '100%',
    })
  }
}
