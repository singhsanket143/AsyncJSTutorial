function createSyncPromise() {
    return new Promise((res, rej) => {
        // async algorithm
        for(let i = 0; i < 10000000000; i++) {
            // blocking code
        }

        res(100);
    });
}

const response = createSyncPromise();