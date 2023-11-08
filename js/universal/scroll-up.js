const MIN_OFFSET = 1000;
const button = document.querySelector('.scroll-up');
const HIDDEN_CLASS = 'scroll-up_hidden';
const SHOWN_CLASS = 'scroll-up_shown';

const toggle = () => {
	if (window.scrollY > MIN_OFFSET) {
		button.classList.remove(HIDDEN_CLASS);
		button.classList.add(SHOWN_CLASS);
		return;
	}

	button.classList.remove(SHOWN_CLASS);
	button.classList.add(HIDDEN_CLASS);
};

const init = () => {
	window.addEventListener('scroll', toggle);
};

export {init};
