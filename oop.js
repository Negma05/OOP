class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

const product1 = new Product(1, 'basket', 100);

class ShoppingCartItem {
    constructor(product, quantity = 1) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

class ShoppingCart {
    constructor(items = []) {
        this.items = items;
    }

    addItem(item) {
        const existantElement = this.items.find(i => i.product.id === item.product.id);
        if (existantElement) {
            existantElement.quantity += item.quantity;
        } else {
            this.items.push(item);
        }
    }

    removeItem(product) {
        this.items = this.items.filter(i => i.product.id !== product.id);
    }

    getTotalItems() {
        return this.items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            0
        );
    }

    getTotalPrice() {
        return this.items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.getTotalPrice(),
            0
        );
    }
}
