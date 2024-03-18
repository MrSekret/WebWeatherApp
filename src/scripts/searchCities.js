import { requestGeo, requestWeather} from "./requests.js"

let SearchTimeout
let EraseTimeout
let LatLanArr = []
const inputElement = document.getElementById('searchcity');
const notfoundBlock = document.querySelector(".general__notfound")
inputElement.addEventListener('input', function(event) {
    clearTimeout(SearchTimeout)
    clearTimeout(EraseTimeout)
    SearchTimeout = setTimeout(showCities, 2000)
    EraseTimeout = setTimeout(hideCities(inputElement.value), 1000)
    var inputValue = event.target.value
    console.log("Изменение в инпуте:", inputValue)
})

function hideCities(input){
    if(!input){
        const cityBlock = document.querySelectorAll(".general__citiesblock-city")
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
function showCities(){
    let counter = 0
    let inputValue = inputElement.value
    const loader = document.getElementById("loader")
    const cityBlock = document.querySelectorAll(".general__citiesblock-city")
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
    }
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