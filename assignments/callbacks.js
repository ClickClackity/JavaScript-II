// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*
  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  console.log(cb(arr));
}

const getArrayLength = arr => {
  return arr.length;
}
getLength(items, getArrayLength);
//
function last(arr, cb) {
  console.log(cb(arr));
}

const getLastArrayItem = arr => {
  return arr[arr.length - 1];
}
last(items, getLastArrayItem);
//
function sumNums(x, y, cb) {
  console.log(cb(x, y));
}

const addNums = (x, y) => {
  return x + y;
}
sumNums(2, 6, addNums);
//
function multiplyNums(x, y, cb) {
  console.log(cb(x, y));
}

const multiply = (x, y) => {
  return x * y;
}
multiplyNums(7, 8, multiply);
//
function contains(item, list, cb) {
  return cb(item, list);
}

const contain = (item, list) => {
  for (i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return true;
    }
  }
  return false;
}
console.log(contains('Notebook', items, contain));
console.log(contains("Baseball", items, contain));
console.log(contains("Gum", items, contain));


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  console.log(cb(array));
}

const removal = dupArr => Array.from(new Set([...dupArr]));

const duplicateArray = [1, 2, 4, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 2, 1];

removeDuplicates(duplicateArray, removal);