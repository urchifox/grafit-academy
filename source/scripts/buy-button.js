import { addToCart, deleteFromCart } from './cart.js';
import { packsUserData } from './packs-user-data.js';

const getTemplate = (id, isInCart) => /*html*/`
  <label class="buy-button" data-id="${id}">
    <input class="buy-button__checkbox" type="checkbox" name="buy" ${isInCart ? 'checked' : ''}/>
    <span class="visually-hidden">Добавить в корзину</span>
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
