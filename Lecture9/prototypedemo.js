function Product(name, price) {
    this.name = name;
    this.price = price;
}

const p = new Product("Iphone", 1200000);

Product.prototype.display = function () {
    console.log("Details of product are", this);
}

p.display();

// if you want to access Product.prototype from p,
console.log(p.__proto__);