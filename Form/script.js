document.getElementById("btn").addEventListener("click",()=>{
      e.preventDefault();
    const userData = {
    
    name:document.getElementById("Name").value,
    email:document.getElementById("Email").value,
    address:document.getElementById("address").value,
    course:document.getElementById("Course").value,  
    data:document.getElementById("showdata")    
}
localStorage.setItem("userData",JSON.stringify(userData));
})
let myform = JSON.parse(localStorage.getItem("userData"))||[];


document.getElementById("showdata").addEventListener("click",()=>{
 document.body.innerHTML +=
`<div class="form-value">
<h3>• Name → ${myform.name}</h3>
<h3>• Address → ${myform.address}</h3>
<h3>• Email → ${myform.email}</h3>
<h3>• Course → ${myform.course}</h3>
</div>
`
})


