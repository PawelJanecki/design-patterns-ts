const myDate = new Date();

// assign myDate to 'object' variable
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  // 1 step: 'object' is prototype of Date
  // 2 step: 'object' is prototype of Object
  // 3 step: 'object' isn't any prototype 
  // console.log(object);
} while (object)