//String data type 

var str1 = 'It\'s Tuesday today!';
var str2 = "We are learning Javascript today!";

console.log(str1);
console.log(str2);

// console.log(str1,str2);

var firstName = 'Emily'; //camelCase naming convention  //use camelCase for main var in project
console.log(firstName);

var last_name = 'Vagim'; //snake naming convention  //use snake for object key names
console.log(last_name);

//String concatination
// var fullName = firstName + ' ' + last_name;
// console.log(fullName);

//other way
//var fullName = firstName.concat(' ').concat(last_name);
var fullName = firstName.concat(' ',last_name);
console.log(fullName);