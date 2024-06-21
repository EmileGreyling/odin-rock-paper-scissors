const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoiceIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[computerChoiceIndex];

    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt(
        'What\'s your choice? "rock", "paper", or "scissors"?'
    ).toLowerCase();

    if (!choices.includes(humanChoice)) {
        alert("That's not a valid choice!");
        return getHumanChoice();
    }

    return humanChoice;
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    let computerChoiceElement = document.querySelector("#computerChoice");
    let resultElement = document.querySelector("#result");
    resultElement.style.display = "block";

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
        resultElement.innerHTML = `You lose! ${
            computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}.`;
        computerChoice++;
    } else {
        resultElement.innerHTML = "It's a tie!";
    }
}

document.querySelectorAll("#human .choice").forEach((button) => {
    button.onclick = () => {
        playRound(button.dataset.choice);
    };
});

if (humanScore > computerScore) alert("You win!");
else if (humanScore < computerScore) alert("You lose!");
