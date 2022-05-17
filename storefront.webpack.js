// storefront.webpack.js

const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/PaymentOption.html': path.resolve(__dirname, 'template/js/custom-js/html/PaymentOption.html'),
      './js/PaymentOption.js': path.resolve(__dirname, 'template/js/custom-js/js/PaymentOption.js'),
      './js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/js/SearchEngine.js')
      //'./js/Checkout.js': path.resolve(__dirname, 'template/js/views/js/Checkout.js')
    }
  }
})
