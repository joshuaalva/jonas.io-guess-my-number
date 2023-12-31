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
// console.log(document.querySelector('.message').textContent); // start guessing...
// changes the message text content from start guessing... > correct number
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent); // correct number
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log((document.querySelector('.guess').value = 23));

// 73 Handling Click Events // 74 Implementing the game logic

// event listener
// event is something that happens on the page
// can wait for an event to happen and then react to it
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess, guess);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage(`No number!`);
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `You Win! Guess is correct`;
    document.querySelector('.number').textContent = secretNumber;
    // have to specify a string when using these selectors
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      displayMessage(
        guess > secretNumber ? `Guess is too high` : `Guess is too low`
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`Hold that L!`);
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   // when guess it too high
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Guess is too high`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Hold that L';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `Guess is too  low!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Hold that L';
  //     document.querySelector('.score').textContent = 0;
  //   }
});

// method so needs ()
// addEventlistener is the most used
// Manipulating CSS styles
// coding challenge #1
// again button functionality

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = `Start Guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = ``;

  document.querySelector('body').style.backgroundColor = `#222`;
  document.querySelector('.number').style.width = `15rem`;
});

// Implementing High Scores

// refactoring duplicate code DRY principle
