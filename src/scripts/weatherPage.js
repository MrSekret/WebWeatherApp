const buttons = document.querySelectorAll(".general__citiesblock-city")
const loader = document.getElementById("loader")

function openWeatherPage(){
    const links = document.querySelectorAll(".general__citiesblock-city")
    
    const cities = []
    links.forEach(elem => {
        let city = elem.innerHTML.split(",")[0]
        cities.push(city)
    })
    
    console.log(cities)
}
function selectCity(city){
    const buttons = document.querySelectorAll(".general__citiesblock-city")
    const inputElem = document.getElementById("searchcity")
    buttons.forEach(elem => {
        elem.style.display = "none"
    })
    inputElem.value = city.innerHTML
    inputElem.readOnly = true
    inputElem.style.color = "#9E9EA0"
    loader.style.display = "grid"
    openWeatherPage()
}


buttons.forEach(elem => {
    elem.addEventListener('click', () => {
        selectCity(elem)
    })
    elem.addEventListener('keydown', (event) => {
        console.log(event.key)
        if (event.key == 'Enter') {
            selectCity(elem)
        }
    })
})


let currentIndex = 0
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        currentIndex = Math.max(currentIndex - 1, 0)
    } else if (event.key === 'ArrowDown') {
        currentIndex = Math.min(currentIndex + 1, buttons.length - 1)
    } else if (event.key == 'Enter') {
        const cities = document.querySelectorAll(".general__citiesblock-city")
        cities.forEach(city => {
            if (city.classList.contains('active')) {
                selectCity(city)
            }
        })
    }

    buttons.forEach((city, index) => {
        city.addEventListener('mouseenter', () => {
            setCurrentIndex(index)
        });
    
        city.addEventListener('mouseleave', () => {
            city.classList.remove('active')
        });
        if (index === currentIndex) {
            city.classList.add('active')
        } else {
            city.classList.remove('active')
        }
    })
})


function setCurrentIndex(index) {
    buttons.forEach((city, i) => {
        if (i === index) {
            city.classList.add('active')
        } else {
            city.classList.remove('active')
        }
    })
}