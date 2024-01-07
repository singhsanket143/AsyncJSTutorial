let x = 10;

for(let i = 0; i < 10000000000; i++) {
    if(i % 1000000000) {
        x++;
    }
}

console.log(x);