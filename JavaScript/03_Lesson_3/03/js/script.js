// var array = new Array(12);
// for (var i = 0; i < array.length; i++) {
//   array[i] = prompt("Enter set of number");
// }
// console.log(array);
// var sum = 0;
// for (var i = 0; i < array.length; i++) {
//   sum += +array[i];
// }
// console.log(sum);

var input = prompt("Enter set of numbers");
var array = input.split(",");
var sum = 0;
for (var i = 0; i < array.length; i++) {
  sum += +array[i];
}
console.log(sum);
