// console.log(hello)


// function declaration
// function sayHello(name) {
//     console.log('Hello ' + name + '!');
// }

// // function expression
// const sayHello2 = function(name) {
//     console.log('Hello ' + name + '!');
// };

// sayHello2();

// function expression can be invoked aka (call run and execute) until defined.
//  declare down below
// function declaration does not have to be defined. you can call them anywhere.
// declare anywhere up or down below function.


// Arrow Function
// const sayHello3 = () => console.log('Hello ' + name + '!');
// const add = (a, b) => a + b;

// calling a function

// console.log(add(2, 2));
//  or
// let sum = add(2, 2);
// console.log(sum);

//  Exercise 1
// function areBothEven(n1, n2) {
//   return !(n1 % 2) && !(n2 % 2);
// }

// areBothEven(4, 7)
// console.log(areBothEven(4, 7));


// Parameters and Arguments

// a and b are parametes (placeholders)
// const add = ((a, b) => a = b);

// 2 and 3 are Arguments (values)
// let sum = add(2, 3);

// This is how we could use the arguments object
// to code the function:

// function getDevObject(name) {
//   let skills = [];
//   for (let i = 1; i < arguments.length; i++) {
//     skills.push(arguments[i]);
//   }
//   return {
//     devName: name,
//     jobSkills: skills
//   };
// }

// gitDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// rest parameters, the above function can be written as follows:
//  skills is a parameter and has to be the last in the list.

// function getDevObject(name, ...skills) {
//   console.log(skills);
//   return {
//     devName: name,
//     jobSkills: skills
//   };
// }

// gitDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery');

// using default parameters, we can do this:
// function setColor(bicycle, color = 'purple') {
// 	bicycle.color = color;
// }

// For example, the forEach method on arrays:

// let arr = ['red', 'green', 'blue'];
//  this is a expression function with no name
// since it is not called anywhere else
// that is why we don't name the function
// arr.forEach(function(color) {
//   console.log(color);
// });

// arr.forEach((color) => console.log(color));

// Immediately Invoked Function Expressions (IIFE)
// (function() {
	// your code here...
// })();

// call back functions or a anonymos function
// Array.forEach(() => {});