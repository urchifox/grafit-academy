import { packsUserData } from './packs-user-data.js';

const getTemplate = (id, isFavorite) => /*html*/`
  <label class="favorite-button"  data-id="${id}">
    <input class="favorite-button__checkbox" name="favorite" type="checkbox" ${isFavorite ? 'checked' : ''}/>
    <span class="visually-hidden">Добавить в избранное</span>
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

  localStorage.setItem('favorites', JSON.stringify(packsUserData.favorites));
};

export {onFavoriteClick, getTemplate};
