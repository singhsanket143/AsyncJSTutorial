const mp = new Map();

mp.set('name', 'sanket');
mp.set('age', 25);
mp.set('hobby', 'teaching');
mp.set('hobby', 'travel');

console.log(mp);

for(entry of mp) {
    console.log(entry);
}

mp.forEach((key, value) => {
    console.log(key, value)
})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map