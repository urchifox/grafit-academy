const buttonRight = document.querySelector('.arrow-right');
const buttonLeft = document.querySelector('.arrow-left');
const toogles = document.querySelectorAll('.slider__toggle');

buttonRight.onclick = function() {
	if (toogles[toogles.length - 1].checked === true) {
		toogles[0].checked = true;
	} else {
		for (let i = 0; i < toogles.length; i++) {
			if (toogles[i].checked === true) {
				toogles[i + 1].checked = true;
				break;
			}
		}
	}
};

buttonLeft.onclick = function() {
	if (toogles[0].checked === true) {
		toogles[toogles.length - 1].checked = true;
	} else {
		for (let i = 0; i < toogles.length; i++) {
			if (toogles[i].checked === true) {
				toogles[i - 1].checked = true;
				break;
			}
		}
	}
};

