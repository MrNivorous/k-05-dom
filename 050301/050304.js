let productsArray = Array.from(document.getElementsByClassName('product'))

console.log(productsArray)

let productDiv = document.getElementById('products')

productDiv  += productsArray.forEach(e => e[0] )
