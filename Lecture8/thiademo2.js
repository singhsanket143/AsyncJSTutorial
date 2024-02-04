const obj = {
    x: 10,
    y: 20,

    nested: {
        z: 30,
        y: 22,

        displayFromInner: function () {
            console.log(`value of x is ${this.x} and y is ${this.y}`);
        }
    },

    displayFromOuter: function () {
        console.log(`value of x is ${this.x} and y is ${this.y}`);
    }
}

obj.displayFromOuter();
obj.nested.displayFromInner();
