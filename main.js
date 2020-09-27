class BaseVector {

  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  get length() {
    return(Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)));
  } 

  toString() {
    return(`(x: ${this.x}, y: ${this.y}, z: ${this.z})`);
  }

  valueOf() {
    return(this.length);
  }
}

class Vector extends BaseVector {

  constructor(x, y, z) {
    super(x, y, z)
  }

  plus(a, b) {
    let newX = a.x + b.x;
    let newY = a.y + b.y;
    let newZ = a.z + b.z;
    return(`(${newX}, ${newY}, ${newZ})`);
  }

  scalar(a, b) {
    return(a.x * b.x + a.y * b.y + a.z * b.z);
  }
}

let a = new Vector (10, 5, 8);
let b = new Vector (5, 2, 6);
let res = new Vector (a, b);

console.log(a);
console.log(b);

console.log(res.plus(a, b));
console.log(res.scalar(a, b));

console.log(a.toString(a));
console.log(b.toString(b));

console.log(a.valueOf(a));
console.log(b.valueOf(b));
