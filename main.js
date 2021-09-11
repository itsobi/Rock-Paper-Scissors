const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", function() {
    console.log("you selected rock");
})

paper.addEventListener("click", function() {
    console.log("you selected paper");
})

scissors.addEventListener("click", function() {
    console.log("you selected scissors");
})