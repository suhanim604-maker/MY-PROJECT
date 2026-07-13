const prompt = require("prompt-sync")();

const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts=0;
let keepPlaying= true;


console.log("******************************");
console.log("welcome to the game")
console.log("******************************");


while (keepPlaying) {
    let userInput = prompt("Enter your number(1-100) ");
    if(userInput===null || userInput.trim().toLowerCase()==="q"){
        console.log("game over, you decide to quiy today")
        console.log(`the correct number was ${targetNumber}`)
        keepPlaying = false;
        break;
    }
    let guess = Number(userInput);
    if(guess <1 || guess>100 || userInput.trim()==="" || isNaN(guess)){
        console.log("Invalid input")
        continue;
    }

    attempts++;

    if(guess === targetNumber){
        console.log("congrats! you guess right")
        console.log("Total attempts",attempts);
        keepPlaying = false;
    }else if(guess > targetNumber){
        console.log("Too High")
    }else{
        console.log("Too low");
    }
    
}