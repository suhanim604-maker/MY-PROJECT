const prompt = require("prompt-sync")();

const choices = ["rock", "paper", "scissor"];

const userChoice = prompt("Enter rock, paper or scissor: ").toLowerCase();

const randomIndex = Math.floor(Math.random() * 3);
const computerChoice = choices[randomIndex];

console.log("Computer chose:", computerChoice);

if (!choices.includes(userChoice)) {
    console.log("Invalid Choice!");
}
if (userChoice === computerChoice) {
    console.log("It's a Draw!");
}
else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
) {
    console.log(" You Win!");
}
else {
    console.log(" Computer Wins!");
}