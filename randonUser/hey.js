
const btn = document.getElementById("fetch-btn");
const image = document.getElementById("user-image")
const email = document.getElementById("user-email")
const name = document.getElementById("user-name")
const number = document.getElementById("user-number")
const age = document.getElementById("user-age")
const country = document.getElementById("user-location")

    async function found(){
        try{
            const response = await fetch("https://randomuser.me/api/")
            
           const data = await response.json()
           const user = data.results[0]

           image.src=user.picture.large
           name.textContent =" "+user.name.title +" "+ user.name.first +" " +user.name.last
           email.textContent=" " + user.email
           number.textContent =" " + user.phone
           age.textContent ="  "+user.dob.age
           country.textContent =" " + user.location.city + ", "+ user.location.country
           
        }catch(err){
                console.log("You can't find users",err)
            }
        }
    fetch-btn.addEventListener('click',found)
    found()