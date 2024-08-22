import { countries } from './countryData';
import itemsTemplate from './templates/cart.hbs';

const list = document.getElementById('gallery__list');
const markUp = itemsTemplate(countries);
list.insertAdjacentHTML('afterbegin', markUp);
