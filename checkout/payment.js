import { cart,checkout} from "../data/cart.js";
import { matchItem } from "../data/products.js";
import { formatCurrency } from "../utils/money.js";
  import { deliveryProduct } from "../data/dileviryDate.js";
export function moneySummary() {let cartSum=0;
let deliveryCharges=0;
 let quantity=0;
  cart.forEach((value)=>{
   
    quantity+=Number(value.quantity);
  let match=  matchItem(value);
  
cartSum+=value.quantity*match.priceCents;
deliveryProduct.forEach((dilevery)=>{if(value.deliveryId===dilevery.deliveryId){
 deliveryCharges+= dilevery.priceincent;
return}})


});let totalPriceBeforeTax=cartSum+deliveryCharges;let tax=totalPriceBeforeTax*10/100;
totalPriceBeforeTax=formatCurrency(totalPriceBeforeTax);
tax=formatCurrency(tax);
deliveryCharges=formatCurrency(deliveryCharges);cartSum=formatCurrency(cartSum);
let totalPrice=(Number(totalPriceBeforeTax)+Number(tax)).toFixed(2)
;let charges=[cartSum,deliveryCharges,totalPriceBeforeTax,tax,totalPrice,quantity]
return charges}

export function paymentHtml() {
  checkout()
  let paymentDetail =moneySummary()
  document.querySelector(".payment-summary").innerHTML=` <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${paymentDetail[5]}):</div>
            <div class="payment-summary-money">${paymentDetail[0]}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">${paymentDetail[1]}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">${paymentDetail[2]}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">${paymentDetail[3]}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${paymentDetail[4]}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`
}