'use strict';

// console.log(document.querySelector('.message').textContent); // just like selecting in css >> if an idea use a #
// on the element >> read the textContent property >> goes from left to right
// dom manipulation

// What is the DOM and DOM manipulation
// Document Object Model: Structured representation of HTML documents. Allows jS to access HTML elements and styles to manipulate them.
// change text, HTML attributes, even CSS styles
// DOM is created by the browser automatically
// DOM tree structure

// DOM !== JavaScript
// (is not)
// Dom Methods and Properties - Web APIs

// Selecting and Manipulationg Elements
console.log(document.querySelector('.message').textContent); // start guessing...
// changes the message text content from start guessing... > correct number
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent); // correct number
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log((document.querySelector('.guess').value = 23));

// Handling Click Events
