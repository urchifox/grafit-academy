import { packsUserData } from './packs-user-data.js';

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
	const input = label.querySelector('input');
	const id = label.dataset.id;

	if (input.checked) {
		packsUserData.favorites.push(id);
	} else {
		packsUserData.favorites.splice(packsUserData.favorites.indexOf(id), 1);
	}

	const favIconFilled = label.querySelector('.favorite-button__icon_checked');
	favIconFilled.classList.toggle('hidden');
};

export {onFavoriteClick, getTemplate};
