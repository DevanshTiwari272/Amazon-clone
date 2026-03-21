import { cart, updateCart } from "/data/cart.js";
import { toGet } from "./data/products.js";
import { formatCurrency } from "./utils/money.js";
let i = "";
let products;
toGet(rederProductHtml).then((pro)=>{products=pro})
console.log(products)
export function rederProductHtml(products){
products.forEach((array, index) => {
  i += `   <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${array.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
          ${array.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src=" ${array.ratingstar()}">
            <div class="product-rating-count link-primary">
             
            </div>
          </div>

          <div class="product-price">
           ${array.currency()}
          </div>

          <div class="product-quantity-container">
            <select class="js-no-quantity${index}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
         
          ${array.extraInfo()}
         
          <div class="product-spacer"></div>

          <div class="added-to-cart js-added${index}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button data-id="${
            array.id
          }" class="adda-toa-cart-button button-primary js-cart" data-no-quantity="js-no-quantity${index}" data-added="js-added${index}">
            Add to Cart
          </button>
        </div>`;
});
console.log(i)

document.querySelector(".js-products-grid").innerHTML = i;

// what i had done here is that onclicking the button the foreach loop start it is to check whether the product that is being clicked is already in the array or not if it is then the quantity of that product will be increased by one and if its not in the array it will be added .to check it i had created a h variable whose incial value is 0 if the product is in the array the value of h will become 1 and the if condition to add that product in the array will not be true

//but what super simple had done is that he had created an variable without any value and if the product is in the array the variable will not have any value working as false and the new product will push in the array but its there the condition will be true it will reassign the variable value to the array value that is an object that satisfy the condition then use it in the condition outside the foreach loop and the quantity property of that object to increase the value
//let a;  if(value.productName===all.dataset.productName) {a=value} if (value){value.quantity++}else{cart.push({productName:`${all.dataset.productName}`,quantity:1}}

const updateQuantity = function (quantity = 0) {
  cart.forEach((value) => {
    quantity += value.quantity;
  });
  document.querySelector(".js-quantity").innerHTML = `${quantity}`;
}; // we are not moving it in the cart file because it is used to update the webpage
function addedAnimation(added) {
  added.classList.add("added");
  setTimeout(() => {
    added.classList.remove("added");
  }, 1000);
}
document.querySelectorAll(".js-cart").forEach((all) => {
  all.addEventListener("click", () => {
    let noQuantity = document.querySelector(`.${all.dataset.noQuantity}`);
    let added = document.querySelector(`.${all.dataset.added}`);

    let quantity = 0;
    updateCart(noQuantity.value, all.dataset.id);
    updateQuantity(quantity);
    addedAnimation(added);
    console.log(noQuantity);
  });
});

updateQuantity();
}