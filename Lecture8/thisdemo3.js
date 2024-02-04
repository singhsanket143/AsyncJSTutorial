const obj = {
    x: 10,
    y: 20,

    display: () => {
        console.log(`value of x is ${this.x} and y is ${this.y}`);
    }
}

obj.display();

console.log(this); // printing from global scope