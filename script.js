

function getComputerChoice() {
    let random = Math.floor((Math.random()*3) + 1);
    switch(random) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
            break;
    }
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase()
    if(player === computer) return "It's a tie!";
    else if(player === "rock" && computer === "paper") {
        return "You lose! Paper beats Rock!"
    }
    else if(player === "scissors" && computer === "rock") {
        return "You lose! Rock beats Scissors!"
    }
    else if(player === "paper" && computer === "scissors") {
        return "You lose! Scissors beats Paper";
    }
    else if(player === "rock" && computer == "scissors") {
        return "You win! Rock beats Scissors!"
    }
    else if(player === "paper" && computer === "rock") {
        return "You win! Paper beats Rock!"
    }
    else if(player === "scissors" && computer === "paper") {
        return "You win! Scissors beats Paper!"
    }
}

function game() {

    let pScore = 0;
    let cScore = 0;

    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose between Rock, Paper, Scissors!");
        let computerChoice = getComputerChoice();
        console.log(computerChoice);
        console.log(playerChoice)
        let result = playRound(playerChoice, computerChoice);
        console.log(result)
        let win = result.slice(4,5);
        console.log(win);
        if(win === "l")
            cScore++;
        else if(win === "w")
            pScore++;

        console.log("Player: " + pScore + " and Computer: " + cScore);
    }

    if(pScore > cScore) 
        return "Player wins!";
    else if(pScore < cScore)
        return "Computer wins!";
    else return "It's a tie!";
}