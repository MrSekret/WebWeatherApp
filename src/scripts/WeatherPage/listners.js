import Elements from "../htmlElements.js"
import { showStartPage } from "./index.js"
import { showCities } from "../SearchPage/index.js"

let SearchTimeout

Elements.inputElemWeather.addEventListener('input', function(event) {
    let inputValue = event.target.value
    let newValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    Elements.inputElemWeather.value = newValue
    clearTimeout(SearchTimeout)
    SearchTimeout = setTimeout(() => { 
        showStartPage()
        showCities()
    }, 1500)
})

Elements.weatherPage__logo.addEventListener('click', () => {
    const zeroSettings = {
        isCitySelected: false,
        currentcity: "",
        weatherInfo: "",
        forecastInfo: "",
        airPollutionInfo: ""
    }
    localStorage.setItem('settings', JSON.stringify(zeroSettings))
    Elements.loader.style.display = "none"
    showStartPage()
})