const player = {
    firstName: 'Virat',
    lastName: 'kohnli',
    numberToBat: 3
}

const player2 = {
    firstName: 'Yuvraj',
    lastName: 'Singh',
    numberToBat: 5
}

const details = function (x, y) {
    console.log(this); // {}
    console.log(x + y);
    console.log(`${this.firstName + ' ' + this.lastName} comes to bat at no. ${this.numberToBat}`);
}


details.apply(player, [10, 20]);