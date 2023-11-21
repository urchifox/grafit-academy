import { createElement } from '../utils.js';
import {init as initSlider} from '../main-page/slider.js';
import { PREVIEWS_ADDRESS } from './pack-data-manager.js';
import {onBuyClick} from './buy-button.js';
import {onFavoriteClick} from './favorite-button.js';
import {getTemplate as getCartButtonTemplate} from './buy-button.js';
import {getTemplate as getFavoriteButtonTemplate} from './favorite-button.js';

const root = document.querySelector('.pack-market');

const getTemplate = (id, {packName, price, isFavorite}) => /*html*/`
	<article class="pack-full pack-market__pack-full">
		<div class="pack-full_container">
			<h2 class="pack-full__name">${packName}</h2>
			
			<div class="slider-container"></div>

			<div class="pack-full__actions-container">
				<p class="pack-full__price">${price}<span class="visually-hidden">рублей</span></p>
				${getCartButtonTemplate(id)}
				${getFavoriteButtonTemplate(id, isFavorite)}
			</div>

			<button class="pack-full__close">
				<span class="visually-hidden">Закрыть окно авторизации</span>
				<span aria-hidden="true" class="material-icons-round">
					close
				</span>
			</button>
		</div>
	</article>
`;

const render = (id, packData) => {
	const card = createElement(getTemplate(id, packData));
	card.addEventListener('click', onOverlayClick);
	card.querySelector('.pack-full__close').addEventListener('click', onCloseClick);
	card.querySelector('.buy-button').addEventListener('click', onBuyClick);
	card.querySelector('.favorite-button').addEventListener('click', onFavoriteClick);
	document.addEventListener('keydown', onEscPress);
	root.append(card);
	initSlider(packData.previews, PREVIEWS_ADDRESS);
	document.body.classList.add('modal-open');
};

const close = () => {
	document.querySelector('.pack-full').remove();
	document.removeEventListener('keydown', onEscPress);
	document.body.classList.remove('modal-open');
};

function onCloseClick () {
	close();
}

function onEscPress (evt) {
	if (evt.key === 'Escape') {
		close();
	}
}

function onOverlayClick (evt) {
	if (evt.target.classList.contains('pack-full')) {
		close();
	}
}

export {render};
