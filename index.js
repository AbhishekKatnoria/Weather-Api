const apikey="52c5f4c526f7ba0e14252405278dbf7e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector("#btn1");
const weatherIcon=document.querySelector(".weather-icon");

async function cheakWeather(city)
{
    const responce= await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await responce.json();

    console.log(data)
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="img/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
          weatherIcon.src="img/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="img/rain.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="img/dzizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weatherIcon.src="img/mist.png";
 }
 document.querySelector(".weather").style.display="block";
  
}

searchbtn.addEventListener("click",()=>{
    cheakWeather(searchbox.value);
})
