import Elements from "../htmlElements.js"


const Qualitativenames = {
    1: "Good",
    2: "Fair",
    3: "Moderate",
    4: "Poor",
    5: "Very Poor"
}

export function showStartPage(){
    Elements.startpage.style.display = "none"
    Elements.weatherpage.style.opacity = 0
    
    Elements.inputElemStart.readOnly = false
    Elements.inputElemStart.style.color = "#FAFAFA"
    Elements.inputElemStart.value = Elements.inputElemWeather.value
    
    Elements.weatherPage__previewblock.classList.remove("fadeIn")
    Elements.weatherPage__infoblocksToday.classList.remove("fadeIn")
    Elements.weatherPage__infoblocksNextdays.classList.remove("fadeIn")
    
    setTimeout(() => {
        Elements.header.classList.add("fadeIn")
        Elements.startpage.classList.add("fadeIn")
        Elements.page.style.marginTop = "160px"
        Elements.wrapper.style.alignItems = "center"
        Elements.header.style.display = "block"
        Elements.startpage.style.display = "block"
        Elements.header.style.opacity = 1
        Elements.startpage.style.opacity = 1
        Elements.weatherpage.style.display = "none"
        Elements.inputElemWeather.value = ""
    }, 700)
}

export function openWeatherPage(fastanime = false){
    if(fastanime){
        Elements.header.style.display = "none"
        Elements.startpage.style.display = "none"
        Elements.wrapper.style.alignItems = "normal"
        Elements.weatherpage.style.display = "block"
        Elements.weatherpage.style.opacity = 1
        Elements.page.style.marginTop = "40px"
    }else{
        Elements.header.style.opacity = 0
        Elements.startpage.style.opacity = 0

        setTimeout(() => {
            Elements.wrapper.style.alignItems = "normal"
            Elements.header.style.display = "none"
            Elements.startpage.style.display = "none"
            Elements.weatherpage.style.display = "block"
            Elements.weatherpage.style.opacity = 1
            Elements.page.style.marginTop = "40px"

            Elements.weatherPage__previewblock.classList.add("fadeIn")
            Elements.weatherPage__infoblocksToday.classList.add("fadeIn")
            Elements.weatherPage__infoblocksNextdays.classList.add("fadeIn")
        }, 700)
    }
}
export function loadWeatherPage(title, weatherInfo, forecastInfo, airPollutionInfo){

    const forecastImg = {
        200: ["./assets/svg/storm_day.svg", "./assets/svg/storm_night.svg"],
        300: ["./assets/svg/rain_moment_day.svg", "./assets/svg/rain_moment_night.svg"],
        500: ["./assets/svg/rain_moment_day.svg", "./assets/svg/rain_moment_night.svg"],
        600: ["./assets/svg/snow_day.svg", "./assets/svg/snow_night.svg"],
        781: ["./assets/svg/cloudy_day.svg", "./assets/svg/cloudy_night.svg"],
        700: ["./assets/svg/cloudy_day.svg", "./assets/svg/cloudy_night.svg"],
        800: ["./assets/svg/clear_day.svg", "./assets/svg/clear_night.svg"],
        801: ["./assets/svg/few_clouds_day.svg", "./assets/svg/few_clouds_night.svg"],
        802: ["./assets/svg/cloudy_day.svg", "./assets/svg/cloudy_night.svg"]
    }
    const forecastImgKeys = Object.keys(forecastImg)
    function updateWeatherTime() {
        const now = new Date()
        const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
        const settings = JSON.parse(localStorage.getItem('settings'))
        utc.setSeconds(utc.getSeconds() + settings.weatherInfo.timezone)
        const time = utc.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })
        Elements.weatherPage__topblockTime.innerHTML = time
        return [utc, time]
    }
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const dateAndTime = updateWeatherTime()
    const date = dateAndTime[0]
    const time = dateAndTime[1]
    const formattedDate = date.toLocaleDateString('en-US', options);
    Elements.weatherPage__topblockTitleblockTitle.innerHTML = title
    Elements.weatherPage__topblockTitleblockDate.innerHTML = formattedDate
    let intervalUpdateTime
    clearInterval(intervalUpdateTime)
    intervalUpdateTime = setInterval(updateWeatherTime, 60000)

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
    Elements.weatherPage__botblockDegrees.innerHTML = `${temp}ºc`
    Elements.weatherPage__botblockAvgdegrees.innerHTML = `${tempmax}ºc / ${tempmin}ºc`
    Elements.weatherPage__botblockText.innerHTML = description[0].toUpperCase() + description.substring(1, description.length)
    if((time[0]=="2" && time[1]>"0") || (time[0]=="0" && time[1]<"5")){
        let weatherPathPNG = weatherPathSVG[1].replace('svg', 'png').replace('.svg', '.png')
        Elements.weatherPage__previewblockInfoBg.src = weatherPathPNG.substring(0, 13) + "bg_" + weatherPathPNG.substring(13)
        Elements.weatherPage__previewblockInfoDecor.src = weatherPathSVG[1]
    }else{ 
        let weatherPathPNG = weatherPathSVG[0].replace('svg', 'png').replace('.svg', '.png')
        Elements.weatherPage__previewblockInfoBg.src = weatherPathPNG.substring(0, 13) + "bg_" + weatherPathPNG.substring(13)
        Elements.weatherPage__previewblockInfoDecor.src = weatherPathSVG[0]
    }

    const humidity = weatherInfo.main.humidity
    const feelslike = Math.round(weatherInfo.main.feels_like)
    const visibility = weatherInfo.visibility/1000
    const windspeed = weatherInfo.wind.speed.toFixed(1)
    const airPollution = Qualitativenames[airPollutionInfo.list[0].main.aqi]
    Elements.weatherPage__detailsValue_thermalSensation.innerHTML = `${feelslike}ºc`
    Elements.weatherPage__detailsValue_visibility.innerHTML = `${visibility} km`
    Elements.weatherPage__detailsValue_windSpeed.innerHTML = `${windspeed} m/s`
    Elements.weatherPage__detailsValue_airHumidity.innerHTML = `${humidity}%`
    Elements.weatherPage__detailsValue_airPollution.innerHTML = airPollution
    for(let ind=0; ind<Elements.weatherBlocks.length; ind++){
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
        const weatherPage__blockTitle = Elements.weatherBlocks[ind].querySelector(".weather-page__block-title")
        const weatherPage__blockText = Elements.weatherBlocks[ind].querySelector(".weather-page__block-text")
        const weatherPage__blockDegrees = Elements.weatherBlocks[ind].querySelector(".weather-page__block-degrees")
        const weatherPage__blockImg = Elements.weatherBlocks[ind].querySelector(".weather-page__block-img")

        if(ind==0) weatherPage__blockTitle.innerHTML = "Today"
        else if(ind==1) weatherPage__blockTitle.innerHTML = "Tomorrow"
        else weatherPage__blockTitle.innerHTML = date
        weatherPage__blockImg.src = weatherPathSVG[0]
        weatherPage__blockText.innerHTML = description
        weatherPage__blockDegrees.innerHTML = `${temp}ºc`
    }
    return intervalUpdateTime
}