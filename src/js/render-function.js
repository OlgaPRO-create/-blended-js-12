
import { listCategories,listProducts } from './refs.js';


export function createCategoryMarkUp (categories) {
console.log(categories)
    const markUp = categories
    .map(category => `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>`).join('')

 listCategories.innerHTML = markUp
}
 export const createProductMarkUp = (products) => {
  const markUp = products
  .map(product =>
  `<li class="products__item" data-id="${product.id}">
    <img class="products__image" src="${product.images[0]}" alt="${product.title}"/>
    <p class="products__title">${product.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${product.brand}</span></p>
    <p class="products__category">Category: ${product.category}</p>
    <p class="products__price">Price: ${product.price}</p>
 </li>
`)
.join('');
listProducts.innerHTML = markUp;
 }