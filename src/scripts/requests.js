let APIkey
let APIkey2
fetch('api.json')
  .then(response => response.json())
  .then(data => {
    APIkey = data.api.key1
    APIkey2 = data.api.key2
  })
  .catch(error => {
    console.error('There was a problem fetching the data:', error);
  });

export async function requestGeo(city){
    const apiGeo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey}`
    try {
        const response = await fetch(apiGeo)
        return await response.json()
    } catch (err) {
        console.log(err)
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
