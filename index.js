"use strict";

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = "Correct Number!";
// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 19;

// document.querySelector('.guess').value = 13;

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
const displayMessage = function (msg) {
    document.querySelector(".message").textContent = msg;
} 

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    // when there is no input
    if (!guess) {
        displayMessage("No number!");
    // when the guess is correct
    } else if (guess === secretNumber) {
        displayMessage("Correct Number!");
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = secretNumber;
        highscore = (score > highscore) ? score : highscore;
        document.querySelector('.highscore').textContent = highscore;
    // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "Too High" : "Too Low");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage("You lost the game!");
        }
    // when guess is too low
    } else {
        if (score > 1) {
            displayMessage("Too Low!");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost the game!";
        }
    }
    document.querySelector('.guess').value = "";
})

document.querySelector('.again').addEventListener('click', function() {
    score = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.background = "#222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage("Start guessing...!");
    document.querySelector('.guess').value = '';
})


