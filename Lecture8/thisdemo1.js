const obj = {
    x: 10,
    y: 20,

    display: function () {
        console.log(`value of x is ${this.x} and y is ${this.y}`);
    }
}

obj.display();
/**
 * Who is calling display ? -> obj
 * That means obj is the call site or the one who is calling for usage of this
 */
console.log(this)
const obj1 = {
    name: 'deeecode',
    age: 200,
    print: () => {
      console.log(this.name)
    }
  }
  
  obj1.print()// why get undefined