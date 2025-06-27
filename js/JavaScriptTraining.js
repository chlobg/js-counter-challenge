//1. Variables & Data Types*

// Create variables firstName = "John" , age = 18 , and print: Hello John, age 18

const firstName = "John";
let age = 18;
console.log("Hello " + firstName + ", age " + age);

//2. Functions

//Write a function that returns the square of a number

function square(number) {
  return number * number;
}
let number = 4;
console.log(square(4));

//Write a function that takes a name and prints Hello <name>

function greet(name) {
  return "Hello, " + name;
}
const name = "Ana";
console.log(greet("Ana"));

//3. Loops

//Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log("Number: ", i);
}

//Print each item in the array ['JS', 'React', 'Node']

let Array = ["JS", "React", "Node"];

for (let i = 0; i <= 2; i++) {
  console.log(Array[i]);
}

//4. Basic DOM & Events

// Create a button that says "Say Hello" → when clicked, show alert("Hello!") => Made on javascripttraining.html
