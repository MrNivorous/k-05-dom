console.log(document.getElementById('main'))

let classes = Array.from(document.getElementsByClassName('selected'))

console.log(classes)

classes.forEach(e => e.classList.add('primary'))
