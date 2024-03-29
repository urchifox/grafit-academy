import { createElement } from './utils.js';
import {init as initSlider} from './slider.js';
import { PREVIEWS_ADDRESS } from './pack-data-manager.js';
import {onBuyClick} from './buy-button.js';
import {onFavoriteClick} from './favorite-button.js';
import {getTemplate as getCartButtonTemplate} from './buy-button.js';
import {getTemplate as getFavoriteButtonTemplate} from './favorite-button.js';
import { packsUserData } from './packs-user-data.js';

const root = document.querySelector('.pack-market');

const getTemplate = (id, {packName, price}, isFavorite, isInCart) => /*html*/`
  <article class="pack-full pack-market__pack-full">
    <div class="pack-full_container">
      <h2 class="pack-full__name">${packName}</h2>

      <div class="slider-container"></div>

      <div class="pack-full__actions-container">
        <p class="pack-full__price">${price}<span class="visually-hidden">рублей</span></p>
        ${getCartButtonTemplate(id, isInCart)}
        ${getFavoriteButtonTemplate(id, isFavorite)}
      </div>

      <button class="pack-full__close">
        <span class="visually-hidden">Закрыть окно авторизации</span>
      </button>
    </div>
  </article>
`;

const onFavoriteButtonClick = (evt) => {
  const label = evt.target.closest('.favorite-button');
  const input = label.querySelector('input');
  const packId = label.dataset.id;

  const card = document.querySelector(`.pack-card[data-id="${packId}"]`);
  const cardInput = card.querySelector('.favorite-button input');

  cardInput.checked = input.checked;
  onFavoriteClick(evt);
};

const onBuyButtonClick = (evt) => {
  const label = evt.target.closest('.buy-button');
  const input = label.querySelector('input');
  const packId = label.dataset.id;

  const card = document.querySelector(`.pack-card[data-id="${packId}"]`);
  const cardInput = card.querySelector('.buy-button input');

  cardInput.checked = input.checked;
  onBuyClick(evt);
};

const render = (id, packData) => {
  const isFavorite = packsUserData.favorites.includes(id);
  const isInCart = packsUserData.inCart.includes(id);
  const card = createElement(getTemplate(id, packData, isFavorite, isInCart));
  card.addEventListener('click', onOverlayClick);
  card.querySelector('.pack-full__close').addEventListener('click', onCloseClick);
  card.querySelector('[name="buy"]').addEventListener('click', onBuyButtonClick);
  card.querySelector('[name="favorite"]').addEventListener('click', onFavoriteButtonClick);
  document.addEventListener('keydown', onEscPress);
  root.append(card);
  initSlider(card, packData.previews, PREVIEWS_ADDRESS);
  document.body.classList.add('modal-open');
};

const close = () => {
  document.querySelector('.pack-full').remove();
  document.removeEventListener('keydown', onEscPress);
  document.body.classList.remove('modal-open');
};

function onCloseClick () {
  close();
}

function onEscPress (evt) {
  if (evt.key === 'Escape') {
    close();
  }
}

function onOverlayClick (evt) {
  if (evt.target.classList.contains('pack-full')) {
    close();
  }
}

export {render};
