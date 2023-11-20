import { PREVIEWS_ADDRESS } from './pack-data-manager.js';
import { createElement } from '../utils.js';

const root = document.querySelector('.packs-list');

const fragment = document.createDocumentFragment();

const getEmptyListTemplate = () => /*html*/`
	<li class="pack-list-message">
		<p>К сожалению, по вашему запросу ничего не найдено :с</p>
	</li>
`;

const getPreviewsTemplate = (previews) => previews.map(({src}) => `<img src="${PREVIEWS_ADDRESS}${src}" alt="" class="pack-card__cover">  `).join('');

const getTemplate = (id, {packName, price, previews}) => /*html*/`
	<li class="pack-card" data-id="${id}">
		<h2 class="pack-card__name"><a href="#" class="pack-card__name-link">${packName}</a></h2>
		<a href="#" class="pack-card__img-link" tabindex="-1">
			${getPreviewsTemplate(previews)}
		</a>
		<div class="pack-card__price-n-btns">
			<span class="pack-card__price">${price}</span>
			<button aria-label="Положить в корзину" class="pack-card__buy"  >
				<img src="img/refpacks/icons/buy.svg" width="30px" height="30px">
			</button>
			<button aria-label="Добавить в избранное" class="pack-card__add-favorites"  >
				<span class="material-icons favorite_border">
					favorite_border
				</span>
				<span class="material-icons  favorite_checked hidden">
					favorite
				</span>
				<spav class="visually-hidden">Добавить в избранное</spav>
			</button>
		</div>
	</li>`;

const render = (data, onListClick) => {
	if (data.length === 0) {
		const message = createElement(getEmptyListTemplate());
		root.append(message);
		return;
	}

	data.forEach(([id, packInfo]) => {
		const card = createElement(getTemplate(id, packInfo));
		fragment.append(card);
	});

	root.addEventListener('click', onListClick);
	root.append(fragment);
};


export {render};
