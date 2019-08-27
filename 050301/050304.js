let productsArray = Array.from(document.getElementsByClassName('product'))

console.log(productsArray)

let productDiv = document.getElementById('products')
console.log(productDiv)

productDiv += productsArray.forEach(e => e.innerHTML)
