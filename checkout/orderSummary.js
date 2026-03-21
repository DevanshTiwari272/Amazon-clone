//remember to check in which places he had used the delivery id
import {cart,removefromcart,checkout,updateDeliveryId} from "../data/cart.js"
import { products ,matchItem} from "../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryProduct } from "../data/dileviryDate.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"
import { moneySummary,paymentHtml } from "./payment.js";
 
let i="";
export function generateHtml() {
i=""
   cart.forEach((value)=>{
    let match=matchItem(value);
  
 
   
    
  i+=  ` <div class="cart-item-container delete-id-${match.id} js-cart-item-container">
            <div class="delivery-date delivery-date-${match.id}">
              Delivery date:  ${deliveryOpionsHtml(match,value)[1]}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${match.image}">

              <div class="cart-item-details">
                <div class="product-name js-product-name-${match.id}">
                  ${match.name}
                </div>
                <div class="product-price">
                ${match.currency()}
                </div>
                <div class="product-quantity js-product-quantity${match.id}">
                  <span>
                    Quantity: <span class="quantity-label quantity-${match.id}">${value.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary js-link-update js-update-${match.id}" data-update-id="${match.id}">
                    Update
                  </span>
                  <input type="text" class="quantity-input input-${match.id} toHide" data-update-id=${match.id}>
                  <span class="save-quantity-link link-primary toHide js-${match.id}" data-update-id="${match.id}">save</span>
                  <span class="delete-quantity-link link-primary js-delete-${match.id}" data-delete-product-id="${value.id}">
                    Delete
                  </span>
                </div>
              </div>
              <div class="delivery-options">
             <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                
               ${deliveryOpionsHtml(match,value)[0]}
             </div> 
            </div>
          </div>`
       
         
});document.querySelector('.js-order-summary').innerHTML=`${i}`;jsLinkUpdate();deleteit();updateDeliveryMethod()
return i;

}


function deliveryDays(value){
let day= dayjs()
const deliveryDate=day.add(value.deliveryDays,"days")
const deliveryFormat=[deliveryDate.format('dddd, MMMM D')

,value.priceincent===0?"Free":`$${formatCurrency(value.priceincent)}`]

return deliveryFormat
}

function checked (match,delivery) {
  

  
   
  let a =  match.deliveryId===delivery.deliveryId?"checked":""
  return a;
  }


function deliveryOpionsHtml(match,value){
  let a =[]
  let check=""
  let html =``
 deliveryProduct.forEach((delivery,index)=>{if(checked(value,delivery)==='checked'){check=deliveryDays(delivery)[0]}; a=[
  html+=` 
                
                <div class="delivery-option">
                  <input type="radio" ${checked(value,delivery)}
                    class="delivery-option-input js-delivery-id" data-id="${match.id}" data-delivery-id=${index+1} data-date="${deliveryDays(delivery)[0]}"
                    name="delivery-option-${match.id}">
                  <div>
                    <div class="delivery-option-date">
                     ${deliveryDays(delivery)[0]}
                    </div>
                    <div class="delivery-option-price">
                        ${deliveryDays(delivery)[1]}
                    
                    </div>
                  </div>
                 </div>       
            
                `,check];
})

return a;}


function element(value) { let Array=[document.querySelector(`.js-${value.dataset.updateId}`).classList,
    document.querySelector(`.input-${value.dataset.updateId}`).classList,
   document.querySelector(`.js-update-${value.dataset.updateId}`).classList,
   document.querySelector(`.quantity-${value.dataset.updateId}`)]
  return Array}
  function deleteit(){
document.querySelectorAll(".link-primary").forEach((value)=>{
  value.addEventListener("click",()=>{
    const deleteId =value.dataset.deleteProductId
    removefromcart(deleteId);paymentHtml()})})}
  
  
  function jsLinkUpdate() {
  document.querySelectorAll('.js-link-update').forEach((value)=>{ value.addEventListener('click',()=>{
   const elementArray=element(value)
   elementArray[0].remove("toHide");
   elementArray[2].add("toHide");
   elementArray[1].remove("toHide");
   elementArray[3].innerHTML="";
 })})

 

  document.querySelectorAll(".save-quantity-link").forEach((value)=>{value.addEventListener("click",()=>{
    const elementArray=element(value)
    elementArray[2].remove("toHide");
    elementArray[0].add("toHide");
    elementArray[1].add("toHide");
    cart.forEach((identity)=>{
    if(identity.id===value.dataset.updateId){
      identity.quantity=document.querySelector(`.input-${value.dataset.updateId}`).value};elementArray[3].innerHTML=Number(document.querySelector(`.input-${value.dataset.updateId}`).value)
  });paymentHtml()})})

   document.querySelectorAll(".quantity-input").forEach((value)=>{value.addEventListener("keydown",(event)=>{if(event.key==="Enter"){
    const elementArray=element(value)
   elementArray[2].remove("toHide");
   value.classList.add("toHide");
   elementArray[0].add("toHide");
   
   cart.forEach((identity)=>{
    if(identity.id===value.dataset.updateId){identity.quantity=value.value};document.querySelector(`.quantity-${value.dataset.updateId}`).innerHTML=Number(value.value)
  });paymentHtml()}})})}
jsLinkUpdate()

 function updateDeliveryMethod(){  document.querySelectorAll(".js-delivery-id").forEach((element)=>{
 element.addEventListener("click",()=>{updateDeliveryId(element);moneySummary();paymentHtml()})
})}
