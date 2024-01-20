function createAsyncPromise() {
    return new Promise((res, rej) => {
        // some logic
        res(10);
    })
}
const response = createAsyncPromise();
// we have a fulfilled promise
for(let i = 0; i < 10000000000; i++) {
    // something
}
response.then(function fulfillHandler(value) {
    console.log("1. promise filfilled with", value);
}, function rejectHandler(value) {
    console.log("1. promise rejected with", value);
});
for(let i = 0; i < 10000000000; i++) {
    // something
}