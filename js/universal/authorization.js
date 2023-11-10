const START_CLASS = 'authorization__forms-container_start';
const MOVED_CLASS = 'authorization__forms-container_moved';

const root = document.querySelector('.main-nav__user-navigation');
const loginButton = root.querySelector('#login-btn');

const modalTemplate = document.querySelector('#authorization')
	.content
	.querySelector('.authorization');
const modal = modalTemplate.cloneNode(true);
const container = modal.querySelector('.authorization__forms-container');
const phoneInput = modal.querySelector('#tel-number');
const codeInput = modal.querySelector('#code');
const form1 = modal.querySelector('#authorization-step1');
const form2 = modal.querySelector('#authorization-step2');
const returnButton = modal.querySelector('#back');
const closingButton = modal.querySelector('.authorization__close');
const phoneNumber = modal.querySelector('#phone-text');

const profileButtonTemplate = document.querySelector('#profile')
	.content
	.querySelector('.main-nav__user-navigation-item');
const profileButton = profileButtonTemplate.cloneNode(true);

const moveForward = () => {
	container.classList.remove(START_CLASS);
	container.classList.add(MOVED_CLASS);
	phoneNumber.textContent = phoneInput.value;
};

const moveBackward = () => {
	container.classList.remove(MOVED_CLASS);
	container.classList.add(START_CLASS);
	codeInput.value = '';
};

const onNumberSubmit = (evt) => {
	evt.preventDefault();
	moveForward();
};

const onCodeSubmit = (evt) => {
	evt.preventDefault();
	closeModal();
	renderProfileButton();
};

const onCloseButtonClick = () => {
	closeModal();
};

const onReturnButtonClick = () => {
	moveBackward();
};

const onEscPress = (evt) => {
	if (evt.key === 'Escape') {
		evt.preventDefault();
		closeModal();
	}
};

const onOverlayClick = (evt) => {
	if (evt.target.classList.contains('authorization')) {
		closeModal();
	}
};

const onLoginButtonClick = (evt) => {
	evt.preventDefault();
	renderModal();
};

function renderModal () {
	modal.addEventListener('click', onOverlayClick);
	document.addEventListener('keydown', onEscPress);
	closingButton.addEventListener('click', onCloseButtonClick);
	form1.addEventListener('submit', onNumberSubmit);
	form2.addEventListener('submit', onCodeSubmit);
	returnButton.addEventListener('click', onReturnButtonClick);

	root.append(modal);
}


function closeModal() {
	moveBackward();
	phoneInput.value = '';
	modal.removeEventListener('click', onOverlayClick);
	document.removeEventListener('keydown', onEscPress);
	closingButton.removeEventListener('click', onCloseButtonClick);
	form1.removeEventListener('submit', onNumberSubmit);
	form2.removeEventListener('submit', onCodeSubmit);
	returnButton.removeEventListener('click', onReturnButtonClick);

	modal.remove();
}

function renderProfileButton() {
	loginButton.remove();
	root.append(profileButton);
}

const init = () => {
	loginButton.addEventListener('click', onLoginButtonClick);
};

export {init};
