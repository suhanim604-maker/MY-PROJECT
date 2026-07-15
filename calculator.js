const prompt = require("prompt-sync")();
let num1 = Number(prompt("enter your 1st num"));
let operator = prompt("select operation");
let num2 = Number(prompt("enter your 2nd num"));
let result=0;

function operation(){
if(operator==="+"){
    console.log(result = num1 + num2);
}else if(operator === "-"){
     console.log(result = num1-num2);
}else if(operator==="*"){
     console.log(result = num1*num2)
}else if(operator === "/"){
    if(num2 === 0){
        console.error("please devide by a whole num");
    }else{
        console.log(result = num1 / num2);
    }
  }

}
operation(result);
