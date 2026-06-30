const API_KEY = "c37ee0d6b9365dd6fee8ccac085ff8f8";

const city = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const weather = document.getElementById("weather")

async function getWeather(){
    const cityName= city.value.trim()
    if(cityName=="")return;
   const response = await fetch(
    // console.log(data)
       `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
     )
    const data = await response.json();

   if(data.cod=="404"){
        weather.innerHTML="<h2>city Not found</h2>"
        return
    }
    weather.innerHTML=`
    <div class="card">
    <h2>${data.name}</h2>
    <h3>wind -  ${data.wind.speed}🌬️</h3>
    <h3>temp -  ${data.main.temp}🌡️</h3>
    <h3>Humidity: ${data.main.humidity}%💧</h3>
    </div>
    `
}
searchBtn.addEventListener("click",getWeather);