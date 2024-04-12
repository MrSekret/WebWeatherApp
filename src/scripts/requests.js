let APIkey = process.env.APIkey
let APIkey2 = process.env.APIkey2

export async function requestGeo(city){
    const apiGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`
    try {
        const response = await fetch(apiGeo)
        return await response.json()
    } catch (err) {
        console.log(err)
        const loader = document.getElementById("loader")
        const notfoundBlock = document.querySelector(".start-page__notfound")
        const startPage__notfoundText = notfoundBlock.querySelector("p")
        loader.style.display = 'none'
        notfoundBlock.style.display = "flex"
        startPage__notfoundText.innerHTML = "Server is not responding."
    }
}
export async function requestLatLon(city){
    return requestGeo(city).then(response => {
        return [response[0].lat, response[0].lon]
    })
}
export async function requestWeather(coords){
    const apiWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${APIkey}&units=metric`
    try {
        const response = await fetch(apiWeather)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export async function requestAirPollution(coords){
    const apiAirPollution = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords[0]}&lon=${coords[1]}&appid=${APIkey2}`
    try {
        const response = await fetch(apiAirPollution)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export async function requestForecast(coords){
    const apiForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${APIkey2}&units=metric`
    try {
        const response = await fetch(apiForecast)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}