export let cart;
loadCart();
export function checkout() {
  document.querySelector(".js-checkout").innerHTML = `${cart.length} : Items`;
}
export function loadCart() {
  cart = JSON.parse(localStorage.getItem("cart")) || [
    { id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", quantity: 8, deliveryId: 2 },
    { id: "15b6fc6f-327a-4ec4-896f-486349e85a3d", quantity: 4, deliveryId: 2 },
  ];
}
export const updateCart = (noQuantity, all) => {
  let h;
  cart.forEach((value) => {
    if (value.id === all) {
      h = value;
    }
  });
  if (!h) {
    cart.push({ id: `${all}`, quantity: Number(noQuantity), deliveryId: 2 });
  } else {
    h.quantity += Number(noQuantity);
  }
  savecart();
};
export function removefromcart(productId) {
   let check =0;
  let newcart = [];
  cart.forEach((id, index) => {
    if (productId !== id.id) {
      newcart.push(id);
    }
  });
 
 
 
if (newcart.length<cart.length||newcart.length===0){
    cart = newcart;
 document.querySelector(`.delete-id-${productId}`).remove();
  savecart();
  checkout();
}
else{return}
 
}

function savecart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function updateDeliveryId(click) {
  cart.forEach((match) => {
    if (match.id === click.dataset.id) {
      match.deliveryId = Number(click.dataset.deliveryId);
      savecart();
      return;
    }
  });
  document.querySelector(
    `.delivery-date-${click.dataset.id}`
  ).innerHTML = `Delivery date:${click.dataset.date}`;
}
