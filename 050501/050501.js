// 050501
let a = (el) => {
	if (el.innerHTML == 'ON') {
		el.innerHTML = 'OFF'
		el.classList.add('off')
		el.classList.remove('on')
	} else {
		el.innerHTML = 'ON'
		el.classList.add('on')
		el.classList.remove('off')
	}
}
