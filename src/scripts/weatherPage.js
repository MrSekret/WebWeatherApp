const loader = document.getElementById("loader")
const page = document.querySelector(".page")
const header = document.querySelector(".header")
const startpage = document.querySelector(".start-page")
const weatherpage = document.querySelector(".weather-page")
const weatherPage__previewblock = document.querySelector(".weather-page__previewblock")
const weatherPage__topblockTitleblockTitle = document.querySelector(".weather-page__topblock-titleblock-title")
const weatherPage__topblockTitleblockDate = document.querySelector(".weather-page__topblock-titleblock-date")
const weatherPage__topblockTime = document.querySelector(".weather-page__topblock-time")
const weatherPage__botblockDegrees = document.querySelector(".weather-page__botblock-degrees")
const weatherPage__botblockAvgdegrees = document.querySelector(".weather-page__botblock-avgdegrees")
const weatherPage__botblockText = document.querySelector(".weather-page__botblock-text")

const weatherPage__infoblocksToday = document.querySelector(".weather-page__infoblocks-today")
const weatherPage__detailsValue_thermalSensation = document.querySelector(".weather-page__details-value_thermal-sensation")
const weatherPage__detailsValue_probabilityofrain = document.querySelector(".weather-page__details-value_probability-of-rain")
const weatherPage__detailsValue_windSpeed = document.querySelector(".weather-page__details-value_wind-speed")
const weatherPage__detailsValue_airHumidity = document.querySelector(".weather-page__details-value_air-humidity")
const weatherPage__detailsValue_UVIndex = document.querySelector(".weather-page__details-value_UV-index")

const weatherPage__infoblocksNextdays = document.querySelector(".weather-page__infoblocks-nextdays")

const wrapper = document.querySelector(".wrapper")

export function openWeatherPage(){
    
    header.style.opacity = 0
    startpage.style.opacity = 0
    
    setTimeout(() => {
        wrapper.style.alignItems = "normal"
        header.style.display = "none"
        startpage.style.display = "none"
        weatherpage.style.display = "block"
        page.style.marginTop = "40px"

        weatherPage__previewblock.classList.add("fadeIn")
        weatherPage__infoblocksToday.classList.add("fadeIn")
        weatherPage__infoblocksNextdays.classList.add("fadeIn")
    }, 700)
}
export function loadWeatherPage(title, weatherInfo){
    weatherPage__topblockTitleblockTitle.innerHTML = title
    const temp = weatherInfo.main.temp
    const tempmax = weatherInfo.main.temp_max
    const tempmin = weatherInfo.main.temp_min
    const description = weatherInfo.weather[0].description
    weatherPage__botblockDegrees.innerHTML = `${Math.round(temp - 273.15)}ºc`
    weatherPage__botblockAvgdegrees.innerHTML = `${Math.round(tempmax - 273.15)}ºc / ${Math.round(tempmin - 273.15)}ºc`
    weatherPage__botblockText.innerHTML = description[0].toUpperCase() + description.substring(1, description.length)
    const humidity = weatherInfo.main.humidity
    const feelslike = weatherInfo.main.feels_like
    const windspeed = weatherInfo.wind.speed
    weatherPage__detailsValue_thermalSensation.innerHTML = `${Math.round(feelslike - 273.15)}ºc`
    weatherPage__detailsValue_windSpeed.innerHTML = `${windspeed.toFixed(1)} m/s`
    weatherPage__detailsValue_airHumidity.innerHTML = `${humidity}%`

    console.log(weatherInfo)
}