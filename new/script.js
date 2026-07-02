const input = document.getElementById("inputBtn")
const button = document.getElementById("searchBtn")
const card = document.getElementById("empty")


async function loadUser() {
    const find = input.value.trim()
    if(!find){
        card.innerHTML = "<p>Please enter the Github profile</p>"
        return
        }
    card.innerHTML= "<p>Loading....</p>"

    try{
    const response = await fetch(`https://api.github.com/users/${find}`)

           if(!response.ok){
            throw new Error("user not found")
           }
           const data = await response.json()
           console.log(data)
           card.innerHTML=`<div class = "empty">
           <div><img src="${data.avatar_url}" alt="">
           <h2> ✦ Usename - ${data.name}</h2><br>
           <p>  ✦ followers - ${data.followers}</p>
           <a href=${data.html_url} target="_blank" >  ✦ visit profile </a>
            </div>
            <div class="info">
               <h3 class="he">  ✦ bio - ${data.bio}</h3>
               <h3 >  ✦ public_repos - ${data.public_repos}</h3>
               <h3 class="he">  ✦ following - ${data.following}</h3>
               <h3>  ✦ location - ${data.location}</h3>
               <h3 class="he">  ✦ company - ${data.company}</h3>
               </div>
            </div>`
        }catch(err){
            console.log("No user found - please enter the valid Username",err)
        }
 
    }

   button.addEventListener("click", loadUser)
