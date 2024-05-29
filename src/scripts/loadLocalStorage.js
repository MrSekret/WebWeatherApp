import { openWeatherPage,  loadWeatherPage } from "./WeatherPage"


let zeroSettings = {
    isCitySelected: false,
    currentcity: "",
    weatherInfo: "",
    forecastInfo: "",
    airPollutionInfo: ""
}

const loadSettings = () => {
    if(localStorage.getItem('settings') == null){
        localStorage.setItem('settings', JSON.stringify(zeroSettings))
    }
    const settingsString = JSON.parse(localStorage.getItem('settings'))
    if(settingsString.isCitySelected){
        loadWeatherPage(settingsString.currentcity, settingsString.weatherInfo, settingsString.forecastInfo, settingsString.airPollutionInfo)
        openWeatherPage(true)
    }
}

export default loadSettings