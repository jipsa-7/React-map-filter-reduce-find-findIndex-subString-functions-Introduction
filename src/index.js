import emojipedia from "./emojipedia";
var numbers = [3, 56, 2, 48, 5];
console.log("Given Array = " + numbers);

//Map -Create a new array by doing something with each item in an array.
function double(numbers) {
  return numbers * 2;
}
const num1 = numbers.map(double);
//const num1 = numbers.map(function (numbers) {
// return numbers * 2;
//});
console.log("Result of map function is " + num1);
var newnumber1 = [];

function doubles(numbers) {
  newnumber1.push(numbers * 2);
}
numbers.forEach(doubles);
//numbers.forEach(function (numbers) {
// newnumber1.push(numbers * 2);
//});
console.log("Result with forEach function " + newnumber1);
console.log(" ");
//Filter - Create a new array by keeping the items that return true.
var num2 = numbers.filter(function (numbers) {
  return numbers > 10;
});
console.log("Result of filter function is " + num2);
var newnumber2 = [];
numbers.forEach(function (numbers) {
  if (numbers > 10) {
    newnumber2.push(numbers);
  }
});
console.log("Result with forEach function " + newnumber2);
console.log(" ");
//Reduce - Accumulate a value by doing something to each item in an array.
var num3 = numbers.reduce(function (A, B) {
  console.log("A = " + A);
  console.log("B = " + B);
  return A + B;
});
console.log("Result of reduce function is " + num3);

var newnumber3 = 0;
numbers.forEach(function (numbers) {
  newnumber3 += numbers;
});
console.log("Result with forEach function " + newnumber3);
console.log(" ");

//Find - find the first item that matches from an array.
var num4 = numbers.find(function (numbers) {
  return numbers > 10;
});
console.log("Result of find funtion = " + num4);

//FindIndex - find the index of the first item that matches.
var num5 = numbers.findIndex(function (numbers) {
  return numbers > 10;
});
console.log("Result of findIndex funtion = " + num5);

// substring - To limit the length of the string.
//Eg for extracting one value from object array in another file.
// We need only 100 charecters per value
const newemojipedia = emojipedia.map(function (emojipedia) {
  return emojipedia.meaning.substring(0, 100);
});
console.log("Result after map and substring function = " + newemojipedia);
