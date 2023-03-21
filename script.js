const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '66a26f2d17msh5aeaa606a9441bep1453d3jsne80a418ec6f0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) =>{
    cityName.innerHTML = city


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        
        console.log(response)
        
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        max_temp.innerHTML = response.max_temp
        min_temp.innerHTML = response.min_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        feels_like.innerHTML = response.feels_like
    
    })
    .catch(err => console.error(err));

}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

const kolkata = async() => {
    await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            kolkata_humidity.innerHTML = response.humidity
            kolkata_max_temp.innerHTML = response.max_temp
            kolkata_min_temp.innerHTML = response.min_temp
            kolkata_temp.innerHTML = response.temp
            kolkata_wind_degrees.innerHTML = response.wind_degrees
            kolkata_wind_speed.innerHTML = response.wind_speed
            kolkata_feels_like.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));

}


const sydney = async() => {
    await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=sydney', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            sydney_humidity.innerHTML = response.humidity
            sydney_max_temp.innerHTML = response.max_temp
            sydney_min_temp.innerHTML = response.min_temp
            sydney_temp.innerHTML = response.temp
            sydney_wind_degrees.innerHTML = response.wind_degrees
            sydney_wind_speed.innerHTML = response.wind_speed
            sydney_feels_like.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));
}


const lisbon = async() => {
    await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lisbon', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            lisbon_humidity.innerHTML = response.humidity
            lisbon_max_temp.innerHTML = response.max_temp
            lisbon_min_temp.innerHTML = response.min_temp
            lisbon_temp.innerHTML = response.temp
            lisbon_wind_degrees.innerHTML = response.wind_degrees
            lisbon_wind_speed.innerHTML = response.wind_speed
            lisbon_feels_like.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));
}


const berlin = async() => {
     await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=berlin', options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)

            berlin_humidity.innerHTML = response.humidity
            berlin_max_temp.innerHTML = response.max_temp
            berlin_min_temp.innerHTML = response.min_temp
            berlin_temp.innerHTML = response.temp
            berlin_wind_degrees.innerHTML = response.wind_degrees
            berlin_wind_speed.innerHTML = response.wind_speed
            berlin_feels_like.innerHTML = response.feels_like

        })
        .catch(err => console.error(err));
}
kolkata();
berlin();
lisbon();
sydney();

