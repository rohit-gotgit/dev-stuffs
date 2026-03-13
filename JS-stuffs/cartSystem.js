class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, price, quantity = 1) {
    const existing = this.items.find(item => item.product === product);

    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ product, price, quantity });
    }
  }

  removeItem(product) {
    this.items = this.items.filter(item => item.product !== product);
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  getItems() {
    return this.items;
  }
}
