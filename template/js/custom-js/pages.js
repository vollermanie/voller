// Add your custom JavaScript for storefront pages here.
window.$ecomConfig.set('default_img_size', 'zoom')
window.storefront.on('widget:@ecomplus/widget-minicart', function () {
  setTimeout(function () {
    const infoChange = document.querySelector('.info-additional')
    const buy = document.querySelector('.product__buy')
    const lessProduct = document.querySelectorAll('.product__short-stock')
    if (lessProduct.length) {
      lessProduct[0].after(infoChange)
    } else {
      buy.after(infoChange)
    }
  }, 1000)
})
