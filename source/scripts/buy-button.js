import { addToCart, deleteFromCart } from './cart.js';
import { packsUserData } from './packs-user-data.js';

const getTemplate = (id, isInCart) => /*html*/`
  <label class="buy-button" data-id="${id}">
    <input type="checkbox" name="buy" class="visually-hidden" ${isInCart ? 'checked' : ''}/>
    <span class="visually-hidden">Добавить в корзину</span>

    <span class="material-symbols-rounded buy-button__icon_border">
      shopping_cart
    </span>
    <span class="material-symbols-rounded buy-button__icon_checked">
      shopping_cart
    </span>
  </label>
`;


const onBuyClick = (evt) => {
  const label = evt.target.closest('.buy-button');
  const input = label.querySelector('input');
  const id = label.dataset.id;

  if (input.checked) {
    packsUserData.inCart.push(id);
    addToCart(id);
  } else {
    packsUserData.inCart.splice(packsUserData.inCart.indexOf(id), 1);
    deleteFromCart(id);
  }

  localStorage.setItem('inCart', JSON.stringify(packsUserData.inCart));
};

export {onBuyClick, getTemplate};