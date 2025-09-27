
import {
  createCategoryMarkUp,
  createProductMarkUp,
} from './js/render-function.js';
import { getProductsCategory, getProduct, getProductByCategory
 } from './js/products-api.js';

 import { listCategories } from './js/refs.js';

async function renderCategory() {
  const categories = await getProductsCategory();
  console.log(categories);
  const allCategories = ['All', ...categories];
  createCategoryMarkUp(allCategories);
}

renderCategory();

async function renderProducts() {
  const products = await getProduct();
  createProductMarkUp(products.products);
}
renderProducts();

 listCategories.addEventListener("click", async(event) => {
const clickedButton = event.target.closest(".categories__btn")
if (!clickedButton) return
 const categoryName = clickedButton.textContent
 console.log (categoryName);
 
 let products
if (categoryName === "All") {
    products = await getProduct()
} else {
    products = await getProductByCategory(categoryName)
}
createProductMarkUp(products.products)
 }
 
)