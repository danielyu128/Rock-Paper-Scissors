

function getComputerChoice() {

    let a = 1;
    let b = 3;
    let rand = Math.floor(Math.random() * (b - a + 1)) + a;
    if (rand == 1) {
        return "rock";
    }
    else if (rand == 2) {
        return "paper";
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("What option do you want to pick?");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log("TIE!" + " Computer chose " + humanChoice + " as well!");
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Computer chose paper. Paper beats Rock.")
            computerScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock.")
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper.")
            humanScore++;
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Computer chose scissors. Scissors beats Paper.")
            computerScore++;
        }

        else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors.")
            humanScore++;
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Computer chose rock. Rock beats Scissors.")
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win! Final Score   You: " + humanScore + " Computer " + computerScore);
    }
    else {
        console.log("You lose! Final Score   You: " + humanScore + " Computer " + computerScore);

    }

}

playGame();