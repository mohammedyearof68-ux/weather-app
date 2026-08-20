





function search(){
const state=document.getElementById("state").value
    const country=document.getElementById("country").value


const geocoding=`https://api.openweathermap.org/geo/1.0/direct?q=${state},${country}&limit=1&appid=a75f8dd2a4bdb1c4f780bb1d1092d6a8`


    
    
    document.getElementById("location-name").textContent=state;

     findposition()
    async function findposition(){
     const convert=await fetch(geocoding)
     const response=await convert.json();
     console.log(response[0])

     const lat=response[0].lat
     const lon=response[0].lon
     const weather=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a75f8dd2a4bdb1c4f780bb1d1092d6a8&units=metric`


     const findweather=await fetch(weather,{
        method:'GET',
     })
     const responseweather= await findweather.json();
     console.log(responseweather)


     document.getElementById("weather-description").textContent=responseweather.weather[0].description;
    
     document.getElementById("condition").textContent=responseweather.weather[0].description;

     document.getElementById("temperature").textContent=responseweather.main.temp;

     document.getElementById("today").textContent=responseweather.main.temp +"°";

     document.getElementById("feels-like").textContent=responseweather.main.feels_like;

     document.getElementById("today2").textContent=responseweather.main.feels_like + "°";

     document.getElementById("humidity").textContent=responseweather.main.humidity+"%";
     
     document.getElementById("pressure").textContent=responseweather.main.pressure +" "+"hPa";

     document.getElementById("visibility").textContent=responseweather.visibility/1000 + " " + "km";

     document.getElementById("wind").textContent=responseweather.wind.speed + " "+ "km/h";
    }

    
}
