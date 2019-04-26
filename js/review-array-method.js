var arr1 = ['papya', 'banana', 'pluot'];
console.log(arr1);

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

arr1.unshift('kiwi');
console.log(arr1);

arr1.push('honey dew');
console.log(arr1);

arr1.splice(2, 1, 'apple');
console.log(arr1);

arr1.splice(1, 1);
console.log(arr1);

var copyOfArr1= arr1.slice();
console.log(copyOfArr1);