const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const displayComputerChoice = document.getElementById("computer-choice");
const displayResult = document.getElementById("result");

function main() {
    rockButton.addEventListener("click", function() {
        playGame("rock");
    })

    paperButton.addEventListener("click", function() {
        playGame("paper");
    })

    scissorsButton.addEventListener("click", function() {
        playGame("scissors");
    })
}
main();



function playGame(userChoice) {
   const computerChoice = getComputerChoice();
   displayComputerChoice.innerHTML = "Computer chooses " + getComputerChoice();

   if (getComputerChoice() === userChoice) {
       displayResult.innerHTML = "It's a draw!";
   }
     if (getComputerChoice() === "rock" && userChoice === "paper") {
       displayResult.innerHTML = "You win!";
   }
   if (getComputerChoice() === "rock" && userChoice === "scissors") {
    displayResult.innerHTML = "You lose!";
    }
    if (getComputerChoice() === "paper" && userChoice === "scissors") {
        displayResult.innerHTML = "You win!";
    }
     if (getComputerChoice() === "paper" && userChoice === "rock") {
       displayResult.innerHTML = "You lost!";
   }
     if (getComputerChoice() === "scissors" && userChoice === "paper") {
       displayResult.innerHTML = "You lose!";
   }
   if (getComputerChoice() === "scissors" && userChoice === "rock") {
    displayResult.innerHTML = "You win!";
    }
   
}
playGame();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}




