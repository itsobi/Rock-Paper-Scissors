const displayComputerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}
console.log(getComputerChoice);


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
       case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            displayComputerChoice.innerHTML = "Computer chooses " + computerChoice;
            result.innerHTML = "You win!"
            break;
        case "rockpaper":
        case "paperscissor":
        case  "scissorsrock":
            displayComputerChoice.innerHTML = "Computer chooses " + computerChoice;
            result.innerHTML = "You lose!"
            break;
        case "rockrock":
        case "paperpaper":
        case  "scissorsscissors":
            displayComputerChoice.innerHTML = "Computer chooses  " + computerChoice;
            result.innerHTML = "It's a draw!"
            break;
     
    }
}


function main() {
    rock_div.addEventListener("click", function() {
        game("rock");
    })

    paper_div.addEventListener("click", function() {
        game("paper");
    })

    scissors_div.addEventListener("click", function() {
        game("scissors");
    })
}

main();