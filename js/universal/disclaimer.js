import { createElement } from '../utils.js';

const root = document.body;

const disclaimer = createElement(`
	<article class="disclaimer body__disclaimer">
		<div class="disclaimer__container">
			<p class="disclaimer__heading">Обратите внимание</p>
			<p class="disclaimer__text">Студия Grafit действительно существует, но этот сайт <strong>не является ее официальной страницей</strong>. Представленные здесь материалы не являются рекламой, размещенная информация не актуальна. Сайт выполнен исключительно в учебных целях.</p>
			<button class="disclaimer__close">Понятно</button>
		</div>
	</article>
`);

const button = disclaimer.querySelector('.disclaimer__close');

const render = () => {
	root.prepend(disclaimer);
};

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

	localStorage.setItem('isDisclaimerSeen', 'true');
	disclaimer.remove();
}

const init = () => {
	if (localStorage.getItem('isDisclaimerSeen') === 'true') {
		return;
	}

	render();
	disclaimer.addEventListener('click', onOverlayClick);
	button.addEventListener('click', onButtonClick);
	document.addEventListener('keydown', onEscPress);
};

export {init};
