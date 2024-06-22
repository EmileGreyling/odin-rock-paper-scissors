const CHOICES = ["rock", "paper", "scissors"];
let gameStillActive = true;
let humanScore = 0;
let computerScore = 0;

let computerChoiceElement = document.querySelector("#computerChoice");
let resultElement = document.querySelector("#result span");
let humanScoreElement = document.querySelector("#humanScore");
let computerScoreElement = document.querySelector("#computerScore");
let playAgainButton = document.querySelector("#playAgain");

playAgainButton.onclick = () => window.location.reload();

function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * CHOICES.length);
    const computerChoice = CHOICES[computerChoiceIndex];

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt(
        'What\'s your choice? "rock", "paper", or "scissors"?'
    ).toLowerCase();

    if (!CHOICES.includes(humanChoice)) {
        alert("That's not a valid choice!");
        return getHumanChoice();
    }

    return humanChoice;
}

function playRound(humanChoice) {
    // Don't play another round if there is already a winner.
    if (!gameStillActive) {
        return;
    }

    let computerChoice = getComputerChoice();

    // Set the innerHTML based on the value of computerChoice
    switch (computerChoice) {
        case "rock":
            computerChoiceElement.innerHTML = "✊"; // Rock emoji
            break;
        case "paper":
            computerChoiceElement.innerHTML = "✋"; // Paper emoji
            break;
        case "scissors":
            computerChoiceElement.innerHTML = "✌️"; // Scissors emoji
            break;
    }

    if (
        // Win conditions
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        // Update score in UI
        humanScoreElement.innerHTML = humanScore;

        if (humanScore === 5) {
            resultElement.innerHTML = 'GAME OVER. You won!';
            gameStillActive = false;
            playAgainButton.style.display = 'block';
            return;
        }

        resultElement.innerHTML = `You win! ${
            humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
        } beats ${
            computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        }.`;
    } else if (
        // Lose conditions
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "rock" && computerChoice === "paper")
    ) {
        computerScore++;
        // Update score in UI
        computerScoreElement.innerHTML = computerScore;

        // Check if the computer has reached a score of 5 to win the game
        if (computerScore === 5) {
            resultElement.innerHTML = 'GAME OVER. You lost!';
            gameStillActive = false;
            playAgainButton.style.display = 'block';
            return;
        }

        resultElement.innerHTML = `You lose! ${
            computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
    } else {
        resultElement.innerHTML = "It's a tie!";
    }
}

document.querySelectorAll("#human .choice").forEach((button) => {
    button.onclick = () => {
        playRound(button.dataset.choice);
    };
});
