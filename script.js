const PasswordField = document.getElementById("Password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const lengthSlider = document.getElementById("Length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("upperCase")
const lowercase = document.getElementById("lowerCase")

const number = document.getElementById("numbers")
const symbol = document.getElementById("symbol")

lengthSlider.addEventListener("input",()=>{
    lengthValue.textContent=lengthSlider.value
})

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerChars = "abcdefghijklmnopqrstuvwxyz"
const numberChars="1234567890"
const symbolChars ="!@#$%^&*"

function generatePassword(){
    let chars = "";
    if(uppercase.checked)chars+=upperChars
    if(lowercase.checked)chars += lowerChars
    if(number.checked)chars += numberChars
    if(symbol.checked)chars += symbolChars
     
    let Password = "";
    for(let i=0; i<lengthSlider.value; i++){
        const randomindex = Math.floor(Math.random()*chars.length)
        Password+=chars[randomindex]
    }
    PasswordField.value= Password
}

generateBtn.addEventListener("click",generatePassword)

copyBtn.addEventListener("click",()=>{
    if(!PasswordField.value)return;
    navigator.clipboard.writeText(
        PasswordField.value
    )
    copyBtn.textContent="copied!"
    setTimeout(()=>{
        copyBtn.textContent="copy"
    },2000)
})
generatePassword();