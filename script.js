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
console.log('hello'.length);

/////////////////////////////////
// Looping through Iterables
/////////////////////////////////

const str1 = 'Hello World, coding is cool';

for (let i = 0; i < str1.length; i++) {
  // console.log(str1[i]);
}

// For ... in Loop
// accesses properties of iterable
console.log('character access: ', str1[6]);
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

  console.log(i, str2[i]);
}