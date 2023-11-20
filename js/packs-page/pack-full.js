import { createElement } from '../utils.js';
import { packsData } from './packs-data.js';
import {init as initSlider} from '../main-page/slider.js';
import { PREVIEWS_ADDRESS } from './pack-data-manager.js';


const root = document.querySelector('.pack-market');

const getTemplate = ({packName, price}) => /*html*/`
	<article class="pack-full pack-market__pack-full">
		<div class="pack-full_container">
			<h2 class="pack-full__name">${packName}</h2>
			
			<div class="slider-container"></div>

			<div class="pack-full__actions-container">
				<p class="pack-full__price">${price}<span class="visually-hidden">рублей</span></p>
				<button aria-label="Положить в корзину" class="pack-full__buy"  >
					<img src="img/refpacks/icons/buy.svg" width="30px" height="30px">
				</button>
				<button aria-label="Добавить в избранное" class="pack-full__add-favorites"  >
					<span class="material-icons favorite_border">
						favorite_border
					</span>
					<span class="material-icons  favorite_checked hidden">
						favorite
					</span>
					<span class="visually-hidden">Добавить в избранное</span>
				</button>
			</div>

			<button class="pack-full__close">
				<span class="visually-hidden">Закрыть</span>
			</button>
		</div>
	</article>
`;

const render = (packData) => {
	const card = createElement(getTemplate(packData));
	card.addEventListener('click', onOverlayClick);
	card.querySelector('.pack-full__close').addEventListener('click', onCloseClick);
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

function onListClick (evt) {
	evt.preventDefault();
	const id = evt.target.closest('.pack-card').dataset.id;
	const packData = packsData.get(id);
	render(packData);
}

export {onListClick};
