class Product {

    constructor(n, p, d, i) {
        this.name = n;
        this.desc = d;
        this.price = p;
        this.image = i;
    }

    displayProduct() {
        // some impl
        console.log("Product details are", this.name, this.desc, this.price, this.image);
    }
}


const p1 = new Product("Iphone", 100000, "Apple iphone", "some image");
console.log(p1)
p1.displayProduct();


const p2 = new Product("Galaxy S23", 100000, "Samsung Galaxy s23", "some image");
console.log(p2)
p2.displayProduct();
