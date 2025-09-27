import"./assets/styles-JE8YjOlG.js";import{a as e}from"./assets/vendor-N5iQpiFS.js";const r=document.querySelector(".categories"),i=document.querySelector(".products");function l(t){console.log(t);const o=t.map(s=>`<li class="categories__item">
   <button class="categories__btn" type="button">${s}</button>
 </li>`).join("");r.innerHTML=o}const a=t=>{const o=t.map(s=>`<li class="products__item" data-id="${s.id}">
    <img class="products__image" src="${s.images[0]}" alt="${s.title}"/>
    <p class="products__title">${s.title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${s.brand}</span></p>
    <p class="products__category">Category: ${s.category}</p>
    <p class="products__price">Price: ${s.price}</p>
 </li>
`).join("");i.innerHTML=o};e.defaults.baseURL="https://dummyjson.com";async function d(){try{const t=await e.get("/products/category-list");return console.log(t),t.data}catch(t){console.log(t)}}async function n(t=1){try{return(await e.get(`/products?limit=12&skip=${(t-1)*12}`)).data}catch{}}const u=async(t="smartphones")=>{try{return(await e.get(`/products/category/${t}`)).data}catch(o){console.log(o)}};async function p(){const t=await d();console.log(t);const o=["All",...t];l(o)}p();async function g(){const t=await n();a(t.products)}g();r.addEventListener("click",async t=>{const o=t.target.closest(".categories__btn");if(!o)return;const s=o.textContent;console.log(s);let c;s==="All"?c=await n():c=await u(s),a(c.products)});
//# sourceMappingURL=index.js.map
