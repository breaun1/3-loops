console.log('Loops and Iteration!');

///////////////////////////
// For Loops
///////////////////////////

// i++ increment +1
for (let i = 0; i < 10; i++) {
  // console.log(i);
}
// you can have the same variable name because it's scoped to the for loop
for (let i = 0; i < 10; i++) {
  // console.log(i);
}

// Exercises
// 1
for (let i = 10; i >= 1; i--) {
  // console.log(i);
}
//2
//a
for (let i = 1; i < 10; i += 2) {
  // console.log(i);
}
//b
for (let i = 1; i < 10; i++) {
  if (i % 2 !== 0) {
    // console.log(i);
  }
}

//3
//a
for (let i = 2; i <= 10; i += 2) {
  // console.log(i);
}
// 5 iterations
//b
for (let i = 1; i <= 10; i++) {
  // console.log('iteration: ' + i);
  if (i % 2 === 0) {
    // console.log('even: ', i);
  }
}
// 10 iterations

//4
for (let i = 6; i <= 60; i += 3) {
  // console.log(i);
}

//5
let str = '#';

for (let i = 0; i < 7; i++) {
  // console.log(str);
  // str += "#"
  str = str + '#';
}

for (let i = '#'; i.length <= 7; i += '#') {
  // console.log(i);
}
// length returns number of characters in string
// console.log('hello'.length);

/////////////////////////////////
// Looping through Iterables
/////////////////////////////////

const str1 = 'Hello World, coding is cool';

for (let i = 0; i < str1.length; i++) {
  // console.log(str1[i]);
}

// For ... in Loop
// accesses properties of iterable
// console.log('character access: ', str1[6]);
for (let index in str1) {
  // console.log(index, str1[index]);
}

//For... of Loop
// accesses the values
for (let char of str1) {
  // console.log(char);
}

/////////////////////////////////
// Continue in For Loops
/////////////////////////////////
const str2 = 'Hello World';

for (let i = 0; i < str2.length; i++) {
  if (str2[i] === 'l') {
    continue;
  }

  // console.log(i, str2[i]);
}

/////////////////////////////////////////
// While Loops
/////////////////////////////////////////

let a = 0;

while (a <= 10) {
  console.log(a);
  a++;
}

let x = 30;

const foo = 'hello code is cool. world.';
let i = 0;

while (foo[i] !== '.') {
  console.log(foo[i]);
  i++;
}

while (x > 0) {
  x /= 2;
  x--;
  ``;

  if (x % 1 !== 0) {
    // console.log('breaking');
    break;
  }

  // console.log(x);
}
// console.log('Im running after the loop ends or breaks');

/**
 * Exercises
 */

// 1
let b = 13;

while (b >= 0) {
  // console.log(b);
  b--;
}

// 2
let c = 35;

while (c >= 0) {
  if (c % 3 === 0) {
    // console.log(c);
  }
  c--;
}

//3
let h = 100;

while (h >= 0) {
  if (h % 5 === 0) {
    // console.log(h);
  }
  h--;
}

//4
let d = 20;

while (d >= 0) {
  if (d % 2 === 0) {
    // console.log(d, d * 3);
  }
  d--;
}

// Bonus Logical Question
/**
 * Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

Write a loop that outputs how many quarters Romeo received.

 */

const price = 4;
let bill = 10;
let quarters = 0;

while (bill > price) {
  bill -= 0.25;
  quarters++;
}

// console.log('dollar amount: ', quarters / 4);

/**
 *
 * Nested Loops
 */
// let iterationAmount = 0;
// for (let i = 0; i < 5; i++) {
//   console.log('outer', i);
//   // 5 iterations
//   for (let j = 0; j < 5; j++) {
//     console.log('inner', j);
//     iterationAmount++;
//   }
// }
// console.log(iterationAmount);

// Prime
for (let i = 2; i < 20; i++) {
  let isPrime = true;
  // console.log('outer: ', i);
  for (let j = 2; j < i; j++) {
    // console.log('inner: ', j);
    if (i % j === 0) {
      // if this is true, it is NOT a prime number
      isPrime = false;
      break;
    }
  }

  if (isPrime === true) {
    console.log(i, 'is a prime number');
  }
}