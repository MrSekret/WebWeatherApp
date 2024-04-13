import './css/loader.css';
import './css/reset.css';
import './sass/style.scss';

import { openWeatherPage, loadWeatherPage } from "./scripts/weatherPage.js"

let zeroSettings = {
    isCitySelected: false,
    currentcity: "",
    weatherInfo: "",
    forecastInfo: "",
    airPollutionInfo: ""
}
loadSettings()
function loadSettings() {
    if(localStorage.getItem('settings') == null){
        localStorage.setItem('settings', JSON.stringify(zeroSettings))
    }
    const settingsString = JSON.parse(localStorage.getItem('settings'))
    if(settingsString.isCitySelected){
        loadWeatherPage(settingsString.currentcity, settingsString.weatherInfo, settingsString.forecastInfo, settingsString.airPollutionInfo)
        openWeatherPage(true)
    }
}