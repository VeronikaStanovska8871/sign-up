module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
      backgroundColor: theme => ({
        'input-bg-color': '#eff2f8',
        'purple-color': '#a07aec',
        'sign-up-button':'#a07aec',
        'sign-up-hover':'#8353e5',
       }),
       textColor: {
        'input-text-color': '#4e5666',
        'newsletter-label':'#a2afc1',
      },
      outline: {
        'outline-field':'2px solid #a07aec',
      },
      borderRadius: {
        'button-radius': '3px',
      },
      spacing: {
        'field': '300px',
        'margin-62':'9.3rem'
      },
   
 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
