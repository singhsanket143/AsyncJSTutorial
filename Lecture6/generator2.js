function* gen() {
    console.log("Start");
    yield 10;

    console.log("middle");

    const x = 10 + (yield 30);

    console.log(x);

    yield x;
}

const v = gen();
console.log(v.next());
console.log(v.next());
console.log(v.next(99));