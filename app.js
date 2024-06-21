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

function playRound(humanChoice, computerChoice) {
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        alert(
            `You win! ${
                humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
            } beats ${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            }.`
        );
    } else if (
        (humanChoice === "scissors" && computerChoice === "rock") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "rock" && computerChoice === "paper")
    ) {
        alert(
            `You lose! ${
                computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
            } beats ${
                humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
            }.`
        );
        computerChoice++;
    } else {
        alert("It's a tie!");
    }
}

for (let i = 0; i < 6; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) alert('You win!');
else if (humanScore < computerScore) alert('You lose!');