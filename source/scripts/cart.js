import { packsData } from './packs-data.js';
import { packsUserData } from './packs-user-data.js';
import { createElement } from './utils.js';
import {render as renderPack} from './pack-full.js';
import { PREVIEWS_ADDRESS } from './pack-data-manager.js';

const cart = document.querySelector('#cart');
const list = cart.querySelector('.menu-dropdown__list');
const gallery = document.querySelector('.pack-market');
const counter = document.querySelector('.cart__counter');

const getMessageTemplate = () => /*html*/`
	<li class="menu-dropdown__item cart__message">
		К сожалению, в вашей корзине пока что нет товаров
	</li>
`;

const renderMessage = () => {
	const message = createElement(getMessageTemplate());
	list.append(message);
};

const getTemplate = (id, {packName, previews}) => /*html*/`
    <li data-id="${id}" class="menu-dropdown__item">
        <a href="#" class="menu-dropdown__link">
			<img src="${PREVIEWS_ADDRESS}${previews[0].src}" class="cart__cover">
			${packName}
			<div class="menu-dropdown__link-comment cart__delete">
				<button class="cart__delete-button">
					<span class="visually-hidden">Удалить из корзины</span>
					<span aria-hidden="true" class="material-icons-round">
						close
					</span>
				</button>
			</div>
		</a>
    </li>
`;

const addToCart = (packId) => {
	const message = list.querySelector('.cart__message');
	message?.remove();
	counter.style.opacity = 1;

	const packInfo = packsData.get(packId);
	const listItem = createElement(getTemplate(packId, packInfo));
	list.append(listItem);

	counter.textContent = packsUserData.inCart.length;
};

const deleteFromCart = (packId) => {
	const listItem = list.querySelector(`.menu-dropdown__item[data-id="${packId}"]`);
	listItem.remove();

	if (packsUserData.inCart.length === 0) {
		renderMessage();
		counter.style.opacity = 0;
		return;
	}

	counter.textContent = packsUserData.inCart.length;
};

const onPackClick = (evt) => {
	if (evt.target.classList.contains('menu-dropdown__link')) {
		evt.preventDefault();
		const id = evt.target.parentElement.dataset.id;
		const packData = packsData.get(id);
		renderPack(id, packData);
		return;
	}

	if (evt.target.closest('.cart__delete-button')) {
		const id = evt.target.closest('.menu-dropdown__item').dataset.id;
		const card = gallery.querySelector(`.pack-card[data-id="${id}"]`);
		const checkbox = card.querySelector('.buy-button input');
		checkbox.checked = false;
		packsUserData.inCart.splice(packsUserData.inCart.indexOf(id), 1);
		deleteFromCart(id);
		localStorage.setItem('inCart', JSON.stringify(packsUserData.inCart));
	}
};

const render = () => {
	if (packsUserData.inCart.length === 0) {
		renderMessage();
	} else {
		packsUserData.inCart.forEach((id) => addToCart(id));
		counter.style.opacity = 1;
	}

	counter.textContent = packsUserData.inCart.length;
	list.addEventListener('click', onPackClick);
};

const init = () => {
	render();
};

export {init, addToCart, deleteFromCart};
