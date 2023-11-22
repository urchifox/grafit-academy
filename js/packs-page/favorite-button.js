import { packsData } from './packs-data.js';

const getTemplate = (id, isFavorite) => /*html*/`
	<label class="favorite-button"  data-id="${id}">
		<input name="favorite" type="checkbox" class="visually-hidden"/>
		<span class="visually-hidden">Добавить в избранное</span>
		
		<div class="favorite-button__icon" aria-hidden="true">
			<span  class="material-icons favorite-button__icon_border">
				favorite_border
			</span>
			<span class="material-icons  favorite-button__icon_checked ${isFavorite ? '' : 'hidden'}">
				favorite
			</span>
		</div>
	</label>
`;

const onFavoriteClick = (evt) => {
	const label = evt.target.closest('.favorite-button');
	const id = label.dataset.id;
	const packData = packsData.get(id);
	const input = label.querySelector('input');
	packData.isFavorite = input.checked;

	const favIconFilled = label.querySelector('.favorite-button__icon_checked');
	favIconFilled.classList.toggle('hidden');
};

export {onFavoriteClick, getTemplate};
