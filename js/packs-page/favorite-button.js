import { packsData } from './packs-data.js';

const getTemplate = (id) => /*html*/`
	<button aria-label="Добавить в избранное" class="favorite-button"  data-id="${id}">
		<span class="material-icons favorite_border">
			favorite_border
		</span>
		<span class="material-icons  favorite_checked hidden">
			favorite
		</span>
		<span class="visually-hidden">Добавить в избранное</span>
	</button>
`;

const onFavoriteClick = (evt) => {
	const button = evt.target.closest('.favorite-button');
	const id = button.dataset.id;
	const packData = packsData.get(id);
	console.log(id);

	const favIconFilled = button.querySelector('.material-icons.favorite_checked');
	favIconFilled.classList.toggle('hidden');
};

export {onFavoriteClick, getTemplate};
