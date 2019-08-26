// 050401
console.log(document.getElementById('main'))

// 050402
// let classes = Array.from(document.getElementsByClassName('selected'))
//
// console.log(classes)
//
// classes.forEach(e => e.classList.add('primary'))

// 050403

let classes = Array.from(document.getElementsByClassName('primary'))

classes.forEach(e => e.classList.remove('selected'))
