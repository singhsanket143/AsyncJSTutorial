const obj = {
    x: 10,
    y: 20,

    display: function () {
        console.log(`value of x is ${this.x} and y is ${this.y} from outer x`);

        const inner = () => {
            console.log(`value of x is ${this.x} and y is ${this.y} from inner x`);

        }
        inner();
    }
}

obj.display();
