const notifyButtons = document.querySelectorAll('.let-me-know');

const buttonToggle = (button) => {
	const iconNotChecked = button.querySelector('.not-checked');
	const iconChecked = button.querySelector('.checked');
	iconNotChecked.classList.toggle('hidden');
	iconChecked.classList.toggle('hidden');
};

const init = () => {
	for (const notifyButton of notifyButtons) {
		const onNotifyBtnClick = () => buttonToggle(notifyButton);
		notifyButton.addEventListener('click', onNotifyBtnClick);
	}
};


export {init};
