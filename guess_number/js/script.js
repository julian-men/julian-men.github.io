//Event listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

// Global Variables
let randomNumber;
let attempts = 7;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);

    // hiding the reset button
    document.querySelector("#resetBtn").style.display = "none";

    // showing the guess button
    document.querySelector("#guessBtn").style.display = "inline";

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus(); // adding focus to textbox
    playerGuess.value = ""; // clearing the textbox

    let feedback = document.querySelector("#feedback");
    feedback.textContent = ""; // clearing the feedback

    document.querySelector("#guesses").textContent = "";
    
    attempts = 7;
    document.querySelector("#attempts").textContent = attempts;
}

function checkGuess() {
    let guess = parseInt(document.querySelector("#playerGuess").value);
    console.log("Player guess: " + guess);

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    if (isNaN(guess) || guess < 1 || guess > 99) {
        feedback.textContent = "Please enter a value between 1 and 99!";
        feedback.style.color = "red";
        return;
    }

    attempts--;
    document.querySelector("#attempts").textContent = attempts;
    console.log("Attempts left: " + attempts);
    feedback.style.color = "orange";

    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You won!";
        feedback.style.color = "darkgreen";

        wins++;
        document.querySelector("#wins").textContent = wins;

        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";

        if (attempts == 0) {
            feedback.textContent = "Sorry, you lost! The number was: " + randomNumber;
            feedback.style.color = "red";

            losses++;
            document.querySelector("#losses").textContent = losses;

            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high!";
        } else {
            feedback.textContent = "Guess was low!";
        }
    }
}

function gameOver() {
    document.querySelector("#guessBtn").style.display = "none";
    document.querySelector("#resetBtn").style.display = "inline";
}
