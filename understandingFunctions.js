var numbers = [3, 56, 2, 48, 5];

//** */for each
numbers.forEach(function (x) {
  if (x < 10) console.log(x);
});
//** */Map -Create a new array by doing something with each item in an array. */
//how map function works
function double(x) {
  return 2 * x;
}
//map function accepts a function as a parameter
//this loops through all the elements of numbers and applies the function that is inside it
console.log(numbers.map(double));

//** */Filter - Create a new array by keeping the items that return true.
const filt = numbers.filter(function (x) {
  return x > 10;
});
console.log(filt);

//** */Reduce - Accumulate a value by doing something to each item in an array.
// currentNumber is the current number in consideration
// accumulator is the previous value
// here in numbers array initially accumulator starts from the 1st element and currentElement is 2nd element of the numbers array
numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

//** */Find - find the first item that matches from an array.
const num = numbers.find(function (x) {
  return x > 10;
});
console.log(num);
// it loops through the array and return the first element that satisfies the condition

//** */FindIndex - find the index of the first item that matches.
const nu = numbers.findIndex(function (x) {
  return x > 10;
});
console.log(nu);
// same as find but returns the index
