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

const details = function () {
    console.log(this); // {}
    console.log(`${this.firstName + ' ' + this.lastName} comes to bat at no. ${this.numberToBat}`);
}
const newDetailsWithYuvraj = details.bind(player2);
const newDetailsWithVirat = details.bind(player);

newDetailsWithYuvraj();
newDetailsWithVirat();