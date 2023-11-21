import { packsData } from './packs-data.js';

const getTemplate = (id, isFavorite) => /*html*/`
	<label class="favorite-button"  data-id="${id}">
		<input type="checkbox" class="visually-hidden"/>
		<span class="visually-hidden">Добавить в избранное</span>

		<div class="favorite-button__icon" aria-hidden="true">
			<span  class="material-icons favorite-button__icon_border">
				favorite_border
			</span>
			<span class="material-icons  favorite-button__icon_checked ${isFavorite ? '' : 'hidden'}">
				favorite
			</span>
		</div>
	</button>
`;

const onFavoriteClick = (evt) => {
	const button = evt.target.closest('.favorite-button');
	const id = button.dataset.id;
	const packData = packsData.get(id);
	// console.log(evt.target.closest('input'));
	packData.isFavorite = evt.target.closest('input').value;

	const favIconFilled = button.querySelector('.favorite-button__icon_checked');
	favIconFilled.classList.toggle('hidden');
};

export {onFavoriteClick, getTemplate};
