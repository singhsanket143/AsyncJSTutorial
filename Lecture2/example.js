function blockingCodeForMoreThanASec() {
    for(let i = 0; i < 10000000000; i++) {
        // some task;
    }
}
let x = 10;
setTimeout(() => {
    console.log("Timer 1 done");
}, 5000);
blockingCodeForMoreThanASec();
setTimeout(() => {
    console.log("Timer 2 done", x);
}, 3000);
setTimeout(() => {
    blockingCodeForMoreThanASec();
    x++;
    console.log("Timer 3 done");
}, 100);
blockingCodeForMoreThanASec();
console.log(x);
