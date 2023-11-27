import { packsData } from '../packs-page/packs-data.js';
import { packsUserData } from '../packs-page/packs-user-data.js';
import { createElement } from '../utils.js';

const cart = document.querySelector('#cart');
const list = cart.querySelector('.profile-menu__list');

const getTemplate = (id, {packName}) => /*html*/`
    <li data-id="${id}" class="profile-menu__item">
        <a href="#" class="profile-menu__link">${packName}</a>
    </li>
`;

const addToCart = (packId) => {
	const packInfo = packsData.get(packId);
	const listItem = createElement(getTemplate(packId, packInfo));
	list.append(listItem);
};

const deleteFromCart = (packId) => {
	const listItem = list.querySelector(`.profile-menu__item[data-id="${packId}"]`);
	listItem.remove();
};

const render = () => {
	packsUserData.inCart.forEach((id) => addToCart(id));
};

const init = () => {
	render();
};

export {init, addToCart, deleteFromCart};
