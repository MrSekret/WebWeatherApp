const APIkey = "16755258e57bd831cdcc404fc06969a1"
const APIkey2 = "454a827ca76f30e3c2ceaef00cda173a"

export async function requestGeo(city){
    const urlgeo = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${APIkey2}`
    try {
        const response = await fetch(urlgeo)
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
    const urlweather = `https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${APIkey}`
    try {
        const response = await fetch(urlweather)
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
