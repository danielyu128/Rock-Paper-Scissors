let humanScore = 0;
let computerScore = 0;

const player_score = document.querySelector(".player_score");
player_score.textContent = "Player Score: "+humanScore;

const computer_score = document.querySelector(".computer_score");
computer_score.textContent = "Computer score: "+computerScore;

let humanSelection;
let computerSelection;

const comp_choice = document.querySelector(".computer_choice");


function getComputerChoice() {

    let a = 1;
    let b = 3;
    let rand = Math.floor(Math.random() * (b - a + 1)) + a;
    if (rand == 1) {
        comp_choice.textContent = "Computer Chose: Rock"
        return "rock";
    }
    else if (rand == 2) {
        comp_choice.textContent = "Computer Chose: Paper"
        return "paper";
    }
    else {
        comp_choice.textContent = "Computer Chose: Scissors"
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) {

    const results = document.querySelector(".results");


    if (humanChoice == computerChoice) {
        results.textContent = "TIE!" + " Computer chose " + humanChoice + " as well!";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        results.textContent = "You lose! Computer chose paper. Paper beats Rock.";
        computerScore++;
        computer_score.textContent = "Computer Score: " + computerScore;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        results.textContent = "You win! Paper beats Rock."
        humanScore++;
        player_score.textContent = "Human Score: " + humanScore;

    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        results.textContent = "You win! Scissors beats Paper.";
        humanScore++;
        player_score.textContent = "Human Score: " + humanScore;

    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        results.textContent = "You lose! Computer chose scissors. Scissors beats Paper.";
        computerScore++;
        computer_score.textContent = "Computer Score: " + computerScore;

    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        results.textContent = "You win! Rock beats Scissors.";
        humanScore++;
        player_score.textContent = "Human Score: " + humanScore;

    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        results.textContent = "You lose! Computer chose rock. Rock beats Scissors.";
        computerScore++;
        computer_score.textContent = "Computer Score: " + computerScore;

    }
    if (humanScore || computerScore == 5) {

        if (humanScore == 5) results.textContent = "GAME OVER! Final Score   You: " + humanScore + " Computer: " + computerScore;

        else if (computerScore == 5) results.textContent = "GAME OVER! Final Score   You: " + humanScore + " Computer: " + computerScore

    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", (event) => {
    console.log(rock.id);
    humanSelection = "rock";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

});

const paper = document.querySelector("#paper");
paper.addEventListener("click", (event) => {
    console.log(paper.id);
    humanSelection = "paper";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", (event) => {
    console.log(scissors.id);
    humanSelection = "scissors";
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

});