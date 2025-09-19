let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {

    let a = 1;
    let b = 3;
    let rand = Math.floor(Math.random() *(b-a+1)) + a;
    if (rand == 1){
        return "rock";
    }
    else if (rand == 2){
        return "paper";
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = console.log(prompt("What option do you want to pick?"));
    return choice;
}

console.log(getHumanChoice())