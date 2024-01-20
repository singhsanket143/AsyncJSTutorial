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
        }, 100);
    });
}

const response = createAsyncPromise();
console.log("promise:" , response);
for(let i = 0; i < 10000000000; i++) {
    // the for loop goes for more than 5 sec
}
console.log("promise:" , response);
for(let i = 0; i < 10000000000; i++) {
    // the for loop goes for more than 5 sec
}