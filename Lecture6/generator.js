function* gen() {
    console.log("line 1");
    yield "sanket";
    console.log("line 2");
    yield 2;
    console.log("line 3");
    yield 3;
    console.log("line 4");
    yield 4;
    console.log("line 5");
    yield 5;
    console.log("line 6");
    yield 6;
    console.log("line 7");
}

const x = gen();
console.log(x.next());
console.log("Is paused");
console.log(x.next());
console.log("Is paused");
console.log(x.next());
console.log("Is paused");
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());


// generators are similar to normal function with a few changes
// to declare a generator u use function* instead of function keyword