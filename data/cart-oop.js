function Cart(storeItemName) {let cart = {
  cartItem: undefined,
  loadCart() {
    this.cartItem = JSON.parse(localStorage.getItem(`${storeItemName}`)) || [
      {
        id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 8,
        deliveryId: 2,
      },
      {
        id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 4,
        deliveryId: 2,
      },
    ];
  },
  checkout() {
    document.querySelector(".js-checkout").innerHTML = `${this.cartItem.length} : Items`;
  },
  updateCart (noQuantity, all)  {
    let h;
    this.cartItem.forEach((value) => {
      if (value.id === all) {
        h = value;
      }
    });
    if (!h) {
      this.cartItem.push({ id: `${all}`, quantity: Number(noQuantity), deliveryId: 2 });
    } else {
      h.quantity += Number(noQuantity);
    }
    this.savecart();
  },
  removefromcart(productId) {
    let check = 0;
    let newcart = [];
    this.cartItemt.forEach((id, index) => {
      if (productId !== id.id) {
        newcart.push(id);
      }
    });

    if (newcart.length < this.cartItem.length || newcart.length === 0) {
      this.cartItem = newcart;
      document.querySelector(`.delete-id-${productId}`).remove();
      this.savecart();
      this.checkout();
    } else {
      return;
    }
  },
  savecart() {
    localStorage.setItem(`${storeItemName}`, JSON.stringify(this.cartItem));
  },
  updateDeliveryId(click) {
    cart.forEach((match) => {
      if (match.id === click.dataset.id) {
        match.deliveryId = Number(click.dataset.deliveryId);
        this.savecart();
        return;
      }
    });
    document.querySelector(
      `.delivery-date-${click.dataset.id}`
    ).innerHTML = `Delivery date:${click.dataset.date}`;
  },
};
return cart;}

let cart =Cart('cartItem')
cart.loadCart();
cart.updateCart(6, "83d4ca15-0f35-48f5-b7a3-1ea210004f2e")
console.log(cart)

let busnniescart =Cart('busnniescart')
busnniescart.loadCart()
console.log(busnniescart)