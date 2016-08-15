const elements = document.querySelectorAll('.carousel');

function enterHandler(event) {
	const element = event.target;
	const next = element.nextElementSibling;
	element.classList.add('will-change');
	next.classList.add('will-change');
}

function leaveHandler(event) {
	const element = event.target;
	const next = element.nextElementSibling;
	element.classList.remove('will-change');
	next.classList.remove('will-change');
}

Array.prototype.map.call(elements, function(item) {
	item.addEventListener('mouseenter', enterHandler)
	item.addEventListener('mouseleave', leaveHandler)
})
