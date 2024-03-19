import { requestGeo, requestLatLon, requestWeather} from "./requests.js"
import { openWeatherPage, loadWeatherPage } from "./weatherPage.js"

let SearchTimeout
let EraseTimeout
let LatLanArr = []
const inputElement = document.getElementById('searchcity');
const loader = document.getElementById("loader")
const notfoundBlock = document.querySelector(".start-page__notfound")
inputElement.addEventListener('input', function(event) {
    let inputValue = event.target.value
    let newValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    inputElement.value = newValue
    clearTimeout(SearchTimeout)
    clearTimeout(EraseTimeout)
    SearchTimeout = setTimeout(showCities, 2000)
    EraseTimeout = setTimeout(hideCities(inputElement.value), 1000)
    console.log("Изменение в инпуте:", inputValue)
})



function showCities(){
    let counter = 0
    let inputValue = inputElement.value
    const cityBlock = document.querySelectorAll(".start-page__citiesblock-city")
    loader.style.display = "grid"
    const searchGeo = city => {
        if(city.length>0 && counter<3){
            requestGeo(city).then(response => {
                if(response.length!=0){
                    notfoundBlock.style.display = "none"
                    let duplicatesarr = []
                    for(let i=0; i<response.length; i++){
                        if(counter>2) break;
                        if(!duplicatesarr.includes(response[i].name)){
                            cityBlock[counter].innerHTML =  `${response[i].name}, ${response[i].country}`
                            cityBlock[counter].style.display = "block"
                            cityBlock[counter].style.opacity = 1
                            cityBlock[counter].style.top =  `${49*counter}px`
                            counter++
                        }
                        duplicatesarr.push(response[i].name)
                    }
                }
                if(counter==0 && response.length==0){
                    notfoundBlock.style.display = "flex"
                }else{
                    let nextcity = city.substring(0, city.length-1)
                    searchGeo(nextcity)
                }
            })
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
        addSelectListners()
    }
}
function hideCities(input){
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

function addSelectListners(){
    let currentIndex = -1
    const cities = document.querySelectorAll(".start-page__citiesblock-city")
    cities.forEach((cityblock, index) => {
        cityblock.addEventListener('click', () => {
            selectedCity(cityblock)
        })
        cityblock.addEventListener('mouseenter', () => {
            setCurrentIndex(index)
        })
        cityblock.addEventListener('mouseleave', () => {
            cityblock.classList.remove('active')
        })
        if (cityblock === currentIndex) {
            cityblock.classList.add('active')
        } else {
            cityblock.classList.remove('active')
        }
    })
    document.addEventListener('keydown', event => {
        if (event.key === 'ArrowUp') {
            currentIndex = Math.max(currentIndex - 1, 0)
        } else if (event.key === 'ArrowDown') {
            currentIndex = Math.min(currentIndex + 1, cities.length - 1)
        } else if (event.key == 'Enter') {
            cities.forEach(cityblock => {
                if (cityblock.classList.contains('active')) {
                    selectedCity(cityblock)
                }
            })
        }
        cities.forEach((city, index) => {
            if (index === currentIndex) {
                city.classList.add('active');
            } else {
                city.classList.remove('active');
            }
        });
    })
}
async function selectedCity(cityelem){
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
    loadWeatherPage(cityelem.innerHTML, weatherInfo)
    openWeatherPage()
}
function setCurrentIndex(index) {
    const cities = document.querySelectorAll(".start-page__citiesblock-city")
    cities.forEach((city, i) => {
        if (i === index) {
            city.classList.add('active')
        } else {
            city.classList.remove('active')
        }
    })
}

// requestGeo().then(response => {
//     let lat = response[0].lat
//     let lon = response[0].lon
//     console.log(response)
//     console.log(lat)
//     console.log(lon)
    
//     requestWeather(lat, lon).then(response => {
//         console.log(response)
//         console.log(response.main.temp-273.15)
//     })
// })