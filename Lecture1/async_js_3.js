// starting here

for(let i = 0; i < 10000000000; i++) {
    // some work
}

console.log("starting timer 1");
setTimeout(() => {
    console.log("timer 1 done");
}, 20000);
console.log("starting timer 2");
setTimeout(() => {
    console.log("timer 2 done")
}, 0);
for(let i = 0; i < 100000000000; i++) {
    // some more work
}
console.log("starting timer 3");
setTimeout(() => {
    console.log("timer 3 done");
}, 100);

// end here