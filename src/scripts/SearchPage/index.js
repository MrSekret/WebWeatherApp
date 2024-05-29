import Elements from "../htmlElements.js"
import { requestGeo, requestLatLon, requestWeather, requestAirPollution, requestForecast } from "../requests.js"
import { openWeatherPage, loadWeatherPage } from "../WeatherPage/index.js"

const loader = document.getElementById("loader")
const notfoundBlock = document.querySelector(".start-page__notfound")

export function showCities(){
    let counter = 0
    let inputValue = Elements.inputElemStart.value
    const cityBlock = document.querySelectorAll(".start-page__citiesblock-city")
    loader.style.display = "grid"
    const searchGeo = async (city) => {
        if(city.length>0 && counter<3){
            const geoInfo = await requestGeo(city)
            if(geoInfo.length!=0){
                notfoundBlock.style.display = "none"
                let duplicatesarr = []
                for(let i=0; i<geoInfo.length; i++){
                    if(counter>2) break;
                    if(!duplicatesarr.includes(geoInfo[i].name)){
                        cityBlock[counter].innerHTML =  `${geoInfo[i].name}, ${geoInfo[i].country}`
                        cityBlock[counter].style.display = "block"
                        cityBlock[counter].style.opacity = 1
                        cityBlock[counter].style.top =  `${49*counter}px`
                        counter++
                    }
                    duplicatesarr.push(geoInfo[i].name)
                }
            }
            if(counter==0 && geoInfo.length==0){
                notfoundBlock.style.display = "flex"
            }else{
                let nextcity = city.substring(0, city.length-1)
                searchGeo(nextcity)
            }
        }
        else{
            cityBlock[counter-1].style.borderBottomLeftRadius  =  `8px`
            cityBlock[counter-1].style.borderBottomRightRadius   =  `8px`
            notfoundBlock.style.display = "none"
            loader.style.display = "none"
        }
    }
    hideCities("")
    if(inputValue.length>0){
        searchGeo(inputValue)
    }
}
export function hideCities(input){
    if(!input){
        const cityBlock = document.querySelectorAll(".start-page__citiesblock-city")
        for(let i=0; i<cityBlock.length; i++){
            cityBlock[i].style.display = "none"
            cityBlock[i].style.opacity = 0
            cityBlock[i].style.top = `${cityBlock[i].style.top - 49}px`
            cityBlock[i].style.borderBottomLeftRadius = `0px`
            cityBlock[i].style.borderBottomRightRadius = `0px`
        }
        notfoundBlock.style.display = "none"
        loader.style.display = "none"
    }
}



export async function selectedCity(cityelem){
    const cities = document.querySelectorAll(".start-page__citiesblock-city")
    const inputElem = document.getElementById("searchcity")
    loader.style.display = "grid"
    cities.forEach(elem => {
        elem.style.display = "none"
    })
    inputElem.value = cityelem.innerHTML
    inputElem.readOnly = true
    inputElem.style.color = "#9E9EA0"
    const [lat, lon] = await requestLatLon(cityelem.innerHTML.split(",")[0])
    const weatherInfo = await requestWeather([lat, lon])
    const forecastInfo = await requestForecast([lat, lon])
    const airPollutionInfo = await requestAirPollution([lat, lon])
    let settings = {
        isCitySelected: true,
        currentcity: cityelem.innerHTML,
        weatherInfo: weatherInfo,
        forecastInfo: forecastInfo,
        airPollutionInfo: airPollutionInfo
    }
    localStorage.setItem('settings', JSON.stringify(settings))
    loadWeatherPage(cityelem.innerHTML, weatherInfo, forecastInfo, airPollutionInfo)
    openWeatherPage()
}
export function setCurrentIndex(index) {
    const cities = document.querySelectorAll(".start-page__citiesblock-city")
    cities.forEach((city, i) => {
        if (i === index) {
            city.classList.add('active')
        } else {
            city.classList.remove('active')
        }
    })
}