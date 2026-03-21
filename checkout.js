import { generateHtml } from "./checkout/orderSummary.js";
import { moneySummary,paymentHtml } from "./checkout/payment.js";
import { toGet } from "./data/products.js";
import'./data/cart-oop.js';
import'./data/cart-oop-class.js'
toGet().then(()=>{generateHtml();paymentHtml()})


