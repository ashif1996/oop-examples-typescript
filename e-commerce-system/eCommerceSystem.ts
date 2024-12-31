// In this example, we demonstrate Inheritance, Polymorphism, and Encapsulation in the context of an E-commerce System with Products, Categories, and Orders.

class Product {
    constructor(public name: string, public category: string, public price: number) {}

    displayInfo(): void {
        console.log(`Product: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
    }
}

class Electronics extends Product {
    constructor(name: string, category: string, price: number, private brand: string) {
        super(name, category, price);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Brand: ${this.brand}`);
    }
}

class Clothing extends Product {
    constructor(name: string, category: string, price: number, private size: string) {
        super(name, category, price);
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Size: ${this.size}`);
    }
}

class Order {
    private items: Product[] = [];
    private orderTotal: number = 0;

    addItem(product: Product): void {
        this.items.push(product);
        this.orderTotal += product.price;
        console.log(`${product.name} added to your order.`);
    }

    displayOrder(): void {
        console.log("\n" + "Order summary:");
        this.items.forEach((item) => item.displayInfo());
        console.log(`Order Total: ${this.orderTotal}`);
    }
}

const phone = new Electronics("iPhone 14", "Electronics", 50000, "Apple");
const tshirt = new Clothing("T-shirt", "Clothing", 1000, "M");

const order = new Order();
order.addItem(phone);
order.addItem(tshirt);
order.displayOrder();