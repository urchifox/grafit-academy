import { packsData } from './packs-data.js';

const getTemplate = (id, isInCart) => /*html*/`
	<label class="buy-button" data-id="${id}">
		<input type="checkbox" name="buy" class="visually-hidden"/>
		<span class="visually-hidden">Добавить в корзину</span>

		<span class="material-symbols-rounded buy-button__icon_border">
			shopping_cart
		</span>
		<span class="material-symbols-rounded buy-button__icon_checked ${isInCart ? '' : 'hidden'}">
			shopping_cart
		</span>
	</label>
`;


const onBuyClick = (evt) => {
	const label = evt.target.closest('.buy-button');
	const id = label.dataset.id;
	const packData = packsData.get(id);
	const input = label.querySelector('input');
	packData.isInCart = input.checked;

	const cartIconFilled = label.querySelector('.buy-button__icon_checked');
	cartIconFilled.classList.toggle('hidden');
};

export {onBuyClick, getTemplate};
