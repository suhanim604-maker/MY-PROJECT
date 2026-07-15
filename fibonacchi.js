const prompt = require("prompt-sync")();
let term = Number(prompt("Enter yourn turns : "));
let arr = [0,1]


if(term <0){
    console.log("invalid tern");
}
for(let i =2; i<term; i++){
    arr[i] = arr[arr.length-1] + arr[arr.length-2];
   
}
if(term>1)
{console.log(arr);}
else if(term==1)
{
    console.log('[ '+arr[0]+' ]')
}