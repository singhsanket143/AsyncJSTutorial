const obj = {
    x: 10,
    y: 20,

    display: function () {
        console.log(`value of x is ${this.x} and y is ${this.y} from outer x`);

        const innerobj = {
            x: -1,
            y: -2,
            inner: () => {
                console.log(`value of x is ${this.x} and y is ${this.y} from inner x`);
    
            }
        }

        innerobj.inner();

    }
}

obj.display();
