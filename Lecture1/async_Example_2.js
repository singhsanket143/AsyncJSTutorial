for(let i = 0; i < 10000000000; i++) {}
console.log("starting timer");
setTimeout(() => {
    console.log("work from set timeout");
}, 10000); // 5000ms, so setTimeout will execute the callback after 5000ms 

console.log("timer triggered");