// Add your custom JavaScript for storefront pages here.
window.$ecomConfig.set('default_img_size', 'zoom')
window.storefront.on('widget:@ecomplus/widget-minicart', function () {
  setTimeout(function () {
    const infoChange = document.querySelector('.info-additional')
    const buy = document.querySelector('.product__buy').product__short-stock
    const lessProduct = document.querySelectorAll('.product__short-stock')
    if (lessProduct.length) {
      lessProduct.after(infoChange)
    } else {
      buy.after(infoChange)
    }
  }, 1000)
})
