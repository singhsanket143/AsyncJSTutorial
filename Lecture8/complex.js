class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }

    add(num) {
        return `${this.real + num.real} + i${this.imag + num.imag}`;
    }
    

    multiply(num) {
        return `${this.real*num.real - this.imag*num.imag} + i ${this.real*num.imag + this.imag*num.real}`;
    }
}

const c1 = new Complex(3, 5);
const c2 = new Complex(4, 10);

console.log(c1.multiply(c2));

// (3 + 5i) + (4 + 6i) => (7 + 11i)