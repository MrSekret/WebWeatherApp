import { showCities } from "./searchCities.js"

const page = document.querySelector(".page")
const header = document.querySelector(".header")
const startpage = document.querySelector(".start-page")
const weatherpage = document.querySelector(".weather-page")
const weatherPage__previewblock = document.querySelector(".weather-page__previewblock")
const weatherPage__previewblockInfoBg = document.querySelector(".weather-page__previewblock-info-bg")
const weatherPage__topblockTitleblockTitle = document.querySelector(".weather-page__topblock-titleblock-title")
const weatherPage__topblockTitleblockDate = document.querySelector(".weather-page__topblock-titleblock-date")
const weatherPage__topblockTime = document.querySelector(".weather-page__topblock-time")
const weatherPage__botblockDegrees = document.querySelector(".weather-page__botblock-degrees")
const weatherPage__botblockAvgdegrees = document.querySelector(".weather-page__botblock-avgdegrees")
const weatherPage__botblockText = document.querySelector(".weather-page__botblock-text")

const weatherPage__previewblockInfoDecor = document.querySelector(".weather-page__previewblock-info-decor")

const weatherPage__infoblocksToday = document.querySelector(".weather-page__infoblocks-today")
const weatherPage__detailsValue_thermalSensation = document.querySelector(".weather-page__details-value_thermal-sensation")
const weatherPage__detailsValue_visibility = document.querySelector(".weather-page__details-value_visibility")
const weatherPage__detailsValue_windSpeed = document.querySelector(".weather-page__details-value_wind-speed")
const weatherPage__detailsValue_airHumidity = document.querySelector(".weather-page__details-value_air-humidity")
const weatherPage__detailsValue_airPollution = document.querySelector(".weather-page__details-value_airPollution")

const weatherPage__infoblocksNextdays = document.querySelector(".weather-page__infoblocks-nextdays")
const weatherBlocks = document.querySelectorAll(".weather-page__block")

const wrapper = document.querySelector(".wrapper")
const inputElemWeather = document.querySelector(".weather-page__input")
const inputElemStart = document.querySelector('.start-page__inputblock-input');

const Qualitativenames = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor"
}

inputElemWeather.addEventListener('input', function(event) {
    let inputValue = event.target.value
    let newValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    inputElemWeather.value = newValue
    clearTimeout(SearchTimeout)
    SearchTimeout = setTimeout(showStartPage, 1500)
})

let SearchTimeout
function showStartPage(){
    header.style.opacity = 1
    startpage.style.opacity = 1
    weatherpage.style.opacity = 0
    
    inputElemStart.readOnly = false
    inputElemStart.style.color = "#FAFAFA"
    inputElemStart.value = inputElemWeather.value

    header.classList.add("fadeIn")
    startpage.classList.add("fadeIn")
    weatherPage__previewblock.classList.remove("fadeIn")
    weatherPage__infoblocksToday.classList.remove("fadeIn")
    weatherPage__infoblocksNextdays.classList.remove("fadeIn")
    
    setTimeout(() => {
        page.style.marginTop = "160px"
        wrapper.style.alignItems = "center"
        weatherpage.style.display = "none"
        header.style.display = "block"
        startpage.style.display = "block"
        inputElemWeather.value = ""
    }, 700)

    showCities()
}

export function openWeatherPage(){
    header.style.opacity = 0
    startpage.style.opacity = 0

    setTimeout(() => {
        wrapper.style.alignItems = "normal"
        header.style.display = "none"
        startpage.style.display = "none"
        weatherpage.style.display = "block"
        weatherpage.style.opacity = 1
        page.style.marginTop = "40px"

        weatherPage__previewblock.classList.add("fadeIn")
        weatherPage__infoblocksToday.classList.add("fadeIn")
        weatherPage__infoblocksNextdays.classList.add("fadeIn")
    }, 700)
}
export function loadWeatherPage(title, weatherInfo, forecastInfo, airPollutionInfo){

    const forecastImg = {
        200: ["./src/assets/svg/storm_day.svg", "./src/assets/svg/storm_night.svg"],
        300: ["./src/assets/svg/rain_moment_day.svg", "./src/assets/svg/rain_moment_night.svg"],
        500: ["./src/assets/svg/rain_moment_day.svg", "./src/assets/svg/rain_moment_night.svg"],
        600: ["./src/assets/svg/snow_day.svg", "./src/assets/svg/snow_night.svg"],
        781: ["./src/assets/svg/cloudy_day.svg", "./src/assets/svg/cloudy_night.svg"],
        700: ["./src/assets/svg/cloudy_day.svg", "./src/assets/svg/cloudy_night.svg"],
        800: ["./src/assets/svg/clear_day.svg", "./src/assets/svg/clear_night.svg"],
        801: ["./src/assets/svg/few_clouds_day.svg", "./src/assets/svg/few_clouds_night.svg"],
        802: ["./src/assets/svg/cloudy_day.svg", "./src/assets/svg/cloudy_night.svg"]
    }
    const forecastImgKeys = Object.keys(forecastImg)
    function updateWeatherTime() {
        const dateUTC = new Date()
        dateUTC.setSeconds(dateUTC.getSeconds() + weatherInfo.timezone)
        const time = dateUTC.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
        weatherPage__topblockTime.innerHTML = time
        return [dateUTC, time]
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateAndTime = updateWeatherTime()
    const date = dateAndTime[0]
    const time = dateAndTime[1]
    const formattedDate = date.toLocaleDateString('en-US', options);
    weatherPage__topblockTitleblockTitle.innerHTML = title
    weatherPage__topblockTitleblockDate.innerHTML = formattedDate
    setInterval(updateWeatherTime, 6000)

    const temp = Math.round(weatherInfo.main.temp)
    const tempmax = Math.round(weatherInfo.main.temp_max)
    const tempmin = Math.round(weatherInfo.main.temp_min)
    const description = weatherInfo.weather[0].description
    let weatherPathSVG
    let weatherId = weatherInfo.weather[0].id
    for(let i=0; i<9; i++){
        if(Math.floor(weatherId/100)==Math.floor(forecastImgKeys[i]/100) || weatherId == forecastImgKeys[i]){
            weatherPathSVG = forecastImg[forecastImgKeys[i]]
        }
    }
    weatherPage__botblockDegrees.innerHTML = `${temp}ºc`
    weatherPage__botblockAvgdegrees.innerHTML = `${tempmax}ºc / ${tempmin}ºc`
    weatherPage__botblockText.innerHTML = description[0].toUpperCase() + description.substring(1, description.length)
    if(time[0]=="2" && time[1]>"0"){
        let weatherPathPNG = weatherPathSVG[1].replace('svg', 'png').replace('.svg', '.png')
        weatherPage__previewblockInfoBg.src = weatherPathPNG.substring(0, 17) + "bg_" + weatherPathPNG.substring(17)
        weatherPage__previewblockInfoDecor.src = weatherPathSVG[1]
    }else{ 
        let weatherPathPNG = weatherPathSVG[0].replace('svg', 'png').replace('.svg', '.png')
        weatherPage__previewblockInfoBg.src = weatherPathPNG.substring(0, 17) + "bg_" + weatherPathPNG.substring(17)
        weatherPage__previewblockInfoDecor.src = weatherPathSVG[0]
    }

    const humidity = weatherInfo.main.humidity
    const feelslike = Math.round(weatherInfo.main.feels_like)
    const visibility = weatherInfo.visibility/1000
    const windspeed = weatherInfo.wind.speed.toFixed(1)
    const airPollution = Qualitativenames[airPollutionInfo.list[0].main.aqi]
    weatherPage__detailsValue_thermalSensation.innerHTML = `${feelslike}ºc`
    weatherPage__detailsValue_visibility.innerHTML = `${visibility} km`
    weatherPage__detailsValue_windSpeed.innerHTML = `${windspeed} m/s`
    weatherPage__detailsValue_airHumidity.innerHTML = `${humidity}%`
    weatherPage__detailsValue_airPollution.innerHTML = airPollution

    for(let ind=0; ind<weatherBlocks.length; ind++){
        loadForecastNextDay(ind)
    }

    function loadForecastNextDay(ind){
        const forecastInd = ind == 0 ? 1 : (ind+1)*8-1
        const dateUTC = new Date()
        dateUTC.setSeconds(dateUTC.getSeconds() + forecastInfo.list[forecastInd].dt)
        const date = dateUTC.toLocaleDateString('en-US', { weekday: 'long' })
        const description = forecastInfo.list[forecastInd].weather[0].main
        const temp = Math.round(forecastInfo.list[forecastInd].main.temp)
        weatherId = forecastInfo.list[forecastInd].weather[0].id
        for(let i=0; i<6; i++){
            if(Math.floor(weatherId/100)==Math.floor(forecastImgKeys[i]/100) || weatherId == forecastImgKeys[i]){
                weatherPathSVG = forecastImg[forecastImgKeys[i]]
            }
        }
        const weatherPage__blockTitle = weatherBlocks[ind].querySelector(".weather-page__block-title")
        const weatherPage__blockText = weatherBlocks[ind].querySelector(".weather-page__block-text")
        const weatherPage__blockDegrees = weatherBlocks[ind].querySelector(".weather-page__block-degrees")
        const weatherPage__blockImg = weatherBlocks[ind].querySelector(".weather-page__block-img")

        if(ind==0) weatherPage__blockTitle.innerHTML = "Today"
        else if(ind==1) weatherPage__blockTitle.innerHTML = "Tomorrow"
        else weatherPage__blockTitle.innerHTML = date
        weatherPage__blockImg.src = weatherPathSVG[0]
        weatherPage__blockText.innerHTML = description
        weatherPage__blockDegrees.innerHTML = `${temp}ºc`
    }
}