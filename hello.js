// const prompt = require("prompt-sync")();

// const targetNumber = Math.floor(Math.random() * 100) + 1;
// let attempts=0;
// let keepPlaying= true;


// console.log("******************************");
// console.log("welcome to the game")
// console.log("******************************");


// while (keepPlaying) {
//     let userInput = prompt("Enter your number(1-100) ");
//     if(userInput===null || userInput.trim().toLowerCase()==="q"){
//         console.log("game over, you decide to quiy today")
//         console.log(`the correct number was ${targetNumber}`)
//         keepPlaying = false;
//         break;
//     }
//     let guess = Number(userInput);
//     if(guess <1 || guess>100 || userInput.trim()==="" || isNaN(guess)){
//         console.log("Invalid input")
//         continue;
//     }

//     attempts++;

//     if(guess === targetNumber){
//         console.log("congrats! you guess right")
//         console.log("Total attempts",attempts);
//         keepPlaying = false;
//     }else if(guess > targetNumber){
//         console.log("Too High")
//     }else{
//         console.log("Too low");
//     }
    
// }

//2.
const prompt = require("prompt-sync")();
let Name = prompt("enter a string: ");
let reverse="";

for (let i = Name.length - 1; i >= 0; i--) {
    reverse += Name[i];
}

if (Name === reverse) {
    console.log("yess!! it's palindrome");
}else {
    console.log("Notttt it's not palindrome");
}