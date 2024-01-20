function createAsyncPromise() {
    return new Promise((res, rej) => {
        // async algorithm
        setTimeout(function timerCompleted() {
            // lets change the state of promise
            const value = Math.random();
            if(value < 0.5) {
                // resolve the promise
                res(value);
            } else {
                // reject the promise
                rej(value);
            }
        }, 5000);
    });
}
const response = createAsyncPromise();
response.then(function fulfillHandler(value) {
    console.log("1. promise filfilled with", value);
}, function rejectHandler(value) {
    console.log("1. promise rejected with", value);
});

response.then(function fulfillHandler(value) {
    console.log("2. promise filfilled with", value);
}, function rejectHandler(value) {
    console.log("2. promise rejected with", value);
})

for(let i = 0; i < 10000000000; i++) {
    // blocking code
}