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
   displayComputerChoice.innerHTML = "Computer chooses " + computerChoice;

   if (computerChoice === userChoice) {
       displayResult.innerHTML = "It's a draw!";
   }
     if (computerChoice === "rock" && userChoice === "paper") {
       displayResult.innerHTML = "You win!";
   }
   if (computerChoice === "rock" && userChoice === "scissors") {
    displayResult.innerHTML = "You lose!";
    }
    if (computerChoice === "paper" && userChoice === "scissors") {
        displayResult.innerHTML = "You win!";
    }
     if (computerChoice === "paper" && userChoice === "rock") {
       displayResult.innerHTML = "You lost!";
   }
     if (computerChoice === "scissors" && userChoice === "paper") {
       displayResult.innerHTML = "You lose!";
   }
   if (computerChoice === "scissors" && userChoice === "rock") {
    displayResult.innerHTML = "You win!";
    }
   
}
playGame();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}





