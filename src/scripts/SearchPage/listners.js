import Elements from "../htmlElements.js"
import { hideCities, showCities } from "./index.js"
import { selectedCity, setCurrentIndex } from "./index.js"

let SearchTimeout
let EraseTimeout
let currentIndex = -1

Elements.inputElemStart.addEventListener('input', function(event) {
    let inputValue = event.target.value
    let newValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
    Elements.inputElemStart.value = newValue
    clearTimeout(SearchTimeout)
    clearTimeout(EraseTimeout)
    SearchTimeout = setTimeout(showCities, 1500)
    EraseTimeout = setTimeout(hideCities(Elements.inputElemStart.value), 1000)
})

const cities = document.querySelectorAll(".start-page__citiesblock-city")

cities.forEach((cityblock, index) => {
    cityblock.addEventListener('click', () => selectedCity(cityblock))
    cityblock.addEventListener('mouseenter', () => setCurrentIndex(index))
    cityblock.addEventListener('mouseleave', () => cityblock.classList.remove('active'))
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
    })
})