const disclaimer = document.querySelector('.disclaimer');
const button = disclaimer.querySelector('.disclaimer__close');

const onOverlayClick = (evt) => {
	if (evt.target.classList.contains('disclaimer')) {
		close();
	}
};

const onButtonClick = () => {
	close();
};

const onEscPress = (evt) => {
	if (evt.key === 'Escape') {
		evt.preventDefault();
		close();
	}
};

function close() {
	disclaimer.removeEventListener('click', onOverlayClick);
	button.removeEventListener('click', onButtonClick);
	document.removeEventListener('keydown', onEscPress);

	disclaimer.remove();
}

const init = () => {
	disclaimer.addEventListener('click', onOverlayClick);
	button.addEventListener('click', onButtonClick);
	document.addEventListener('keydown', onEscPress);
};

export {init};
