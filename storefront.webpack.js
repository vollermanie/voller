const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './js/EcCheckout.js': path.resolve(__dirname, 'template/js/components/EcCheckout')
    }
  }
})
