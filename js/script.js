document.querySelector('body').addEventListener('click', counterHandler)
function counterHandler (event) {
	let sign = event.target.dataset.counter
	if(sign) {
		let parent = event.target.parentElement
		let input = parent.querySelector('.quantity-counter__input')
		let value = parent.querySelector('.quantity-counter__input').value
		input.value = sign === 'minus' ? +value - 1 : +value + 1
	}
}