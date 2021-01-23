import itemsTemplate from '../templates/product-items.hbs';
import items from '../menu.json';

const markup = itemsTemplate(items);
const itemsRef = document.querySelector('.js-menu');
itemsRef.insertAdjacentHTML('beforeend', markup);
