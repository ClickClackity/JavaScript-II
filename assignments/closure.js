// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const firstName = (firstName) => {
  return function(lastName){
    return function(greet){
      return function(farewell){
        return greet + firstName + " " + lastName + "." + farewell;
      }
    }
  }
}

console.log(firstName("Kevin")("Manning")("Hello, my name is ")(" It was nice to meet you."))

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  let count = 0;

  return function() {
    ++count;
    return count;
  }
};

const myCounter = counterMaker();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker2 = () => {
  let count = 0;

  return function() {
    count++;
    if (count > 7) {
      count = 1;
    }
    
    return count;
  }
};

const myCounter2 = counterMaker2();
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = (counter) => ({ currCounter: () => counter, increment: () => ++counter, decrement: () => --counter});
let countClock = counterFactory(5);
countClock.decrement();
countClock.increment();
countClock.increment();
console.log(countClock.currCounter());
countClock.increment();
countClock.increment();
countClock.increment();
countClock.increment();
countClock.increment();
console.log(countClock.currCounter());
countClock.decrement();
countClock.decrement();
countClock.decrement();
console.log(countClock.currCounter());