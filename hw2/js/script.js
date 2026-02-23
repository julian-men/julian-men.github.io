const choices = ["rock", "paper", "scissors"];

const emojis = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️"
};

let playerScore = 0;
let computerScore = 0;

const choiceButtons = document.querySelectorAll(".choice");
const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");
const resultText = document.getElementById("result");
const playerScoreSpan = document.getElementById("playerScore");
const computerScoreSpan = document.getElementById("computerScore");
const resetBtn = document.getElementById("resetBtn");
const body = document.body;


// ev 1 - Choice buttons
choiceButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const playerChoice = button.getAttribute("data-choice");
        playGame(playerChoice);

    });
});


// ev 2 - Reset button
resetBtn.addEventListener("click", function() {

    playerScore = 0;
    computerScore = 0;

    playerScoreSpan.textContent = 0;
    computerScoreSpan.textContent = 0;

    resultText.textContent = "Game Reset! Make your move!";

    body.className = "";

    playerChoiceText.textContent = "Your Choice: ❔";
    computerChoiceText.textContent = "Computer Choice: ❔";

    enableButtons();
});


// rps logic
function playGame(playerChoice) {

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];

    playerChoiceText.textContent = "Your Choice: " + emojis[playerChoice];
    computerChoiceText.textContent = "Computer Choice: " + emojis[computerChoice];

    if (playerChoice === computerChoice) {

        resultText.textContent = "It's a Tie!";
        body.className = "tie";

    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {

        playerScore++;
        playerScoreSpan.textContent = playerScore;

        resultText.textContent = "You Win!";
        body.className = "win";

    } 
    else {

        computerScore++;
        computerScoreSpan.textContent = computerScore;

        resultText.textContent = "You Lose!";
        body.className = "lose";
    }

    checkWinner();
}


// first to 5 wins the match
function checkWinner() {

    if (playerScore === 5) {

        resultText.textContent = "🎉 You won the match!";
        disableButtons();

    } 
    else if (computerScore === 5) {

        resultText.textContent = "💻 Computer won the match!";
        disableButtons();
    }
}


function disableButtons() {

    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].disabled = true;
    }
}


function enableButtons() {

    for (let i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].disabled = false;
    }
}