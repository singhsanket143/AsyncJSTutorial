class Product {
    // properties -> class members / data members
    // name;
    // price;
    // description;
    // image;

    constructor(n, p, d, i) {
        console.log("logging this before allocating values", this); //{name: iundefined, desc: undefined ...}
        this.productName = n;
        this.price = p;
        this.description = d;
        this.image = i;
        this.rating = 0; // defualt value


        console.log("Creating an obj", this); // if u donot return anything then also newly created object is returned;
        // return {x: "sanket"};
        // return [] // if u return object then the object mentioend here is returned/ 
        // return "sanket"" ; // if u return primitive then newly cereated object is returned
    }


    // behaviours -> class methods / member functions
    buyProduct() {
        console.log("ought a new product");
    }
}

const obj = new Product();
console.log(obj);

const p = new Product("S23", 90000, "Samsung galaxy", "some image");
console.log(p)