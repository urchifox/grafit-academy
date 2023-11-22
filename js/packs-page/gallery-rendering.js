import { PREVIEWS_ADDRESS } from './pack-data-manager.js';
import { createElement } from '../utils.js';
import {getTemplate as getCartButtonTemplate} from './buy-button.js';
import {getTemplate as getFavoriteButtonTemplate} from './favorite-button.js';
import { packsUserData } from './packs-user-data.js';

const root = document.querySelector('.packs-list');

const fragment = document.createDocumentFragment();

const getEmptyListTemplate = () => /*html*/`
	<li class="pack-list-message">
		<p>К сожалению, по вашему запросу ничего не найдено :с</p>
	</li>
`;

const getPreviewsTemplate = (previews) => previews.map(({src}) => `<img src="${PREVIEWS_ADDRESS}${src}" alt="" class="pack-card__cover">  `).join('');

const getTemplate = (id, {packName, price, previews}, isFavorite, isInCart) => /*html*/`
	<li class="pack-card" data-id="${id}">
		<h2 class="pack-card__name"><a href="#" class="pack-card__name-link">${packName}</a></h2>
		<a href="#" class="pack-card__img-link" tabindex="-1">
			${getPreviewsTemplate(previews)}
		</a>
		<div class="pack-card__price-n-btns">
			<span class="pack-card__price">${price}</span>
			${getCartButtonTemplate(id, isInCart)}
			${getFavoriteButtonTemplate(id, isFavorite)}
		</div>
	</li>`;

const render = (data, onListClick) => {
	if (data.length === 0) {
		const message = createElement(getEmptyListTemplate());
		root.append(message);
		return;
	}

	data.forEach(([id, packInfo]) => {
		const isFavorite = packsUserData.favorites.includes(id);
		const isInCart = packsUserData.inCart.includes(id);
		const card = createElement(getTemplate(id, packInfo, isFavorite, isInCart));
		fragment.append(card);
	});

	root.addEventListener('click', onListClick);
	root.append(fragment);
};


export {render};
