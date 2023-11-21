import { packsData } from './packs-data.js';

const getTemplate = (id) => /*html*/`
	<button aria-label="Положить в корзину" class="buy-button" data-id="${id}">
		<img src="img/refpacks/icons/buy.svg" width="30px" height="30px">
	</button>
`;


const onBuyClick = (evt) => {
	const id = evt.target.closest('.buy-button').dataset.id;
	const packData = packsData.get(id);
	console.log(id);
};

export {onBuyClick, getTemplate};
