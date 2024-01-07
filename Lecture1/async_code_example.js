console.log("Hey there");

console.log("Starting to execute");

setTimeout(() => {
    console.log("work from set timeout");
}, 10000); // 5000ms, so setTimeout will execute the callback after 5000ms 

console.log("End");