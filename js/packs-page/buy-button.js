import { packsData } from './packs-data.js';

const getTemplate = (id) => /*html*/`
	<label class="buy-button" data-id="${id}">
		<input type="checkbox" class="visually-hidden"/>
		<span class="visually-hidden">Добавить в корзину</span>

		<img src="img/refpacks/icons/buy.svg" width="30px" height="30px">
	</label>
`;


const onBuyClick = (evt) => {
	const id = evt.target.closest('.buy-button').dataset.id;
	const packData = packsData.get(id);
	console.log(id);
};

export {onBuyClick, getTemplate};
