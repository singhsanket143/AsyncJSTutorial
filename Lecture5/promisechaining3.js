function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej(time);
        }, time);
    });
}

createPromise(1000) // returns pr1 {value: undefined, state: pending, onFulFilled: [f], onRejected: []}
.then(function f(value) {
    console.log("Value in first then", value);
    return value*2;
}, function r1(value) {
    // rejection callback for pr1

    console.log("Executing r1 guys wohooooo", value);
    throw 700;


}) // returns pr2 {value: undefined, state: pending, onFulFilled: [g], onRejected: []}
.then(function g(value) {
    // fulfill callback for pr2
    console.log("Value in second then", value);
    return value*2;
}) // returns pr3 {value: undefined, state: pending, onFulFilled: [h], onRejected: []}
.then(function h(value) {
    console.log("Value in third then", value);
    return value*2;
}); // returns pr4 {value: undefined, state: pending, onFulFilled: [], onRejected: []}


/**
 // the above code and below code is identical

 const pr1 = createPromise(10000);
 const pr2 = pr1.then(function f(value) {
    console.log("Value in first then", value);
    return value*2;
});

const pr3 = pr2.then(function g(value) {
    console.log("Value in second then", value);
    return value*2;
});

const pr4 = pr3..then(function h(value) {
    console.log("Value in third then", value);
    return value*2;
});
 */