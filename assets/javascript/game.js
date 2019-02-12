// SETUP

/* Selection Variables + Computer's Random Choice */
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

/* Toteboard Count Variables */
var wins = 0;
var losses = 0;   
var guesses = 9;  
var soFar = [];

var guessList = document.getElementById("guessList"); /* Connects to the DIV created in HTML */
var winsCount = document.getElementById("winsCount"); /* Connects to the DIV created in HTML */
var lossesCount = document.getElementById("lossesCount"); /* Connects to the DIV created in HTML */
var guessesCount = document.getElementById("guessesCount"); /* Connects to the DIV created in HTML */
var userGuess = document.getElementById("guess"); /* Connects to the DIV created in HTML */

// FUNCTIONS

/* Reset the game without refreshing page */
function resetGame() {
    guesses = 9;
    soFar = [];
    var randomPick = alphabet[Math.floor(Math.random() * alphabet.length)];
}


/* Trigger start of game when user presses a key */
document.onkeyup = function(event) {
    /* Allows so only letters can be chosen, avoiding my 'meta' result (via cmd, alt, opt, shift, etc.) */
     //Got here with help from my tutor, Leah.
    if (event.which <= 90 && event.which >= 65) {

    /* Computer makes their choice */
    var randomPick = alphabet[Math.floor(Math.random() * alphabet.length)];

    /* User guess input */
    var userGuess = event.key.toLowerCase();

    if (userGuess === randomPick) {
        alert("Great guess! You win!");
        wins++;
        resetGame();
        winsCount.textContent = "Wins: " + wins; // Display result

    } else if (userGuess !== randomPick) {
            guesses--;
            soFar.push(userGuess);
            guessesCount.textContent = "Guesses: " + guesses;
            guessList.textContent = "Your guesses so far: " + soFar.join(", ");
                if ((soFar.length >= 9) || (guesses === 0)) {
                    alert("Tough break. Try again.");
                    losses++;
                    soFar = [];
                    lossesCount.textContent = "Losses: " + losses; // Display result
                    resetGame();
                }
        }
    }
}   

/* Future updates:
1. Clear user guesses upon loss, not when pressing a new key to start a new game.
2. Allow so hitting same key repeatedly only shows up once in the guess list.
*/
