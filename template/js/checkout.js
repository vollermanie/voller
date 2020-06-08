import '#template/js/checkout'
import './custom-js/checkout'
import ecomCart from '@ecomplus/shopping-cart'
var lessUnit = document.getElementById('lessUnit')
var firstphrase = document.getElementById('lessSome')
var lastphrase = document.getElementById('noMore')
var lessQuantity = 12
lessUnit.innerHTML = lessQuantity
ecomCart.on('change', ({ data }) => {
  var checkoutButton = document.querySelector('.cart__btn-checkout')
  var percentBar
  var countQuantity = data.items.reduce((acc, curr) => acc + curr.quantity, 0)
  var evalQuantity = lessQuantity - countQuantity
  if (evalQuantity > 0) {
    lessUnit.innerHTML = evalQuantity
    percentBar = Math.round(countQuantity / lessQuantity * 100) + '%'
    document.getElementById('lastUnitsBar').style.width = percentBar
    document.getElementById('percentBar').innerHTML = percentBar
    firstphrase.style.display = 'block'
    lastphrase.style.display = 'none'
    checkoutButton.style.display = 'none'
  } else {
    percentBar = '100%'
    checkoutButton.style.display = 'block'
    firstphrase.style.display = 'none'
    lastphrase.style.display = 'block'
    document.getElementById('lastUnitsBar').style.width = percentBar
    document.getElementById('percentBar').innerHTML = percentBar
  }
})
