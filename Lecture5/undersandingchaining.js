function createPromise(time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time);
        }, time);
    });
}

const resolver = (val) => {
    console.log("Resolving with", val);
    return 20;
};
const rejector = (val) => console.log("Rejecting with", val);


const pr1 = createPromise(10000); // first promise object 
console.log("PR1", pr1);
 
const pr2 = pr1.then(resolver, rejector);
console.log("PR2", pr2);
