"use strict"

const ApiKey = "9c16ab348a857263fe6aea230298cca0";
const searchIn = document.querySelector('.myinput');
const city = document.querySelector('.city');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-img img');
const weatherType = document.querySelector('.weather-img span');
const humid = document.querySelector('.humid');
const speedd = document.querySelector('.speed');
const btn = document.querySelector('.mybtn')
let lat,lon;



searchIn.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        weatherData();
    }
})

function mybtns() {
    weatherData();
}

function weatherData() {
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchIn.value}&units=metric&appid=9c16ab348a857263fe6aea230298cca0`;
    fetch(api)
        .then(response => response.json())
        .then(data => {
            const { name } = data;
            const { temp, humidity } = data.main;
            const { icon, description } = data.weather[0];
            const { speed } = data.wind;

            city.innerHTML = `<h1>Weather in</h1> : ${name}`;
            humid.innerHTML = `<p>Humidity: ${humidity} %`;
            weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
            weatherType.innerHTML = description;
            speedd.innerHTML = `<p>Speed: ${speed} km/h`;
            temperature.innerHTML = `<h3>${temp} °C`;
        })
}

window.onload = function () {
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(x => {
            lon= x.coords.longitude;
            lat= x.coords.latitude;
            let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`;

            fetch(api)
            .then(response => response.json())
            .then(data => {
                const { name } = data;
                const { temp, humidity } = data.main;
                const { icon, description } = data.weather[0];
                const { speed } = data.wind;
    
                city.innerHTML = `<h1>Weather in</h1> : ${name}`;
                humid.innerHTML = `<p>Humidity: ${humidity} %`;
                weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
                weatherType.innerHTML = description;
                speedd.innerHTML = `<p>Speed: ${speed} km/h`;
                temperature.innerHTML = `<h3>${temp} °C`;
            })
        });
    }
}

// PRELOADER JS START
window.onload = function(){
    
    document.querySelector(".preloader").style.display = "none";
    
}

// PRELOADER JS END END END

// BARS MENU START
const toggle = document.getElementById('toggle');
const sidebar = document.getElementById("sidebar")



toggle.onclick = function(){
toggle.classList.toggle("active")
sidebar.classList.toggle("activeside");
}


// BARS MENU END END