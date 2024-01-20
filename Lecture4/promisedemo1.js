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

