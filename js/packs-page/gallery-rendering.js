import { PREVIEWS_ADRESS } from './pack-data-manager.js';
import { createElement } from '../utils.js';

const root = document.querySelector('.packs-list');

const fragment = document.createDocumentFragment();

const getPreviewsTemplate = (previewsName) => previewsName.map((preview) => `<img src="${PREVIEWS_ADRESS}${preview}" alt="" class="pack-card__cover">  `).join('');;

const getTemplate = ({packName, price, coverName, previewsName}) => /*html*/`
	<li class="pack-card" data-id="${packName}">
		<h2 class="pack-card__name"><a href="#" class="pack-card__name-link">${packName}</a></h2>
		<a href="#" class="pack-card__img-link" tabindex="-1">
			<img src="${PREVIEWS_ADRESS}${coverName}" alt="" class="pack-card__cover">  
			${getPreviewsTemplate(previewsName)}
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
	data.forEach(([, packInfo]) => {
		const card = createElement(getTemplate(packInfo));
		fragment.append(card);
	});

	root.addEventListener('click', onListClick);
	root.append(fragment);
};


export {render};
