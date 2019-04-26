// Number data type

var a = 10
console.log(a);

var b = 100;
console.log(b);

var a = 20
console.log(a);

var c = 0x1E; // HEX value of 30
console.log(c);

var d = 0.5;
console.log(d);

//Addition
var sum = a + b;
console.log(sum);

//Subtraction
var diff = d - c;
console.log(diff);

//Multiplication
var multi = a * d;
console.log(multi);

//Division
var div = a / d;
console.log(div);
var div = b / a;
console.log(div);

//Modulus
var mod = b % a;
console.log(mod);
var mod = b % c;
console.log(mod);

var e = '20'; //Not a number but is a string
console.log(typeof e); //Returns the type of variable e

console.log(a === e);  //strict compairison  //false
console.log(a == e);  //lose comparison  //not true but Truthy (half true)
