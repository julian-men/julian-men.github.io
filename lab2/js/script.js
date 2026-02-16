// global variables
let guessCount = 0;
let limit = 7;
let num = Math.floor(Math.random() * 99) + 1;

function randomNum() {
    // generating random number
}

// inline event listener 
function guess() {
    // get user guess
    let userGuess = document.querySelector("#userGuess").value;
    let displayUserGuess = document.querySelector("#userGuesses");
    let displayHighLow = document.querySelector("#displayHighLow");

    // if guess count > or = 7, don't allow any more guesses
    if (guessCount >= limit) {
        displayHighLow.textContent = `You failed! You had ${guessCount} guesses.`;
        return;
    }
    
    console.log(num);
    
    // display the user's guess
    displayUserGuess.textContent += `${userGuess} `;
    
    // styling output
    document.querySelector("#displayHighLow").style.color = "red";
    document.querySelector("#displayHighLow").style.backgroundColor = "purple";
    
    // guess logic
    if (userGuess > num) {
        displayHighLow.textContent = "Too high!";
    } else if (userGuess < num) {
        displayHighLow.textContent = "Too low!";
    } else if (userGuess == num) {
        document.querySelector("#displayHighLow").style.color = "green";
        displayHighLow.textContent = `You guessed it! You had ${limit - guessCount} guesses remaining!`;
    }
    
    // increment guess count
    guessCount++;
}

document.querySelector("#guessBtn").addEventListener("click", guess);