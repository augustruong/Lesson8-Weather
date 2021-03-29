let getData = async (city) => {
    try {
    let preData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`)
    let data = await preData.json()
    let temp = data.main.temp
        document.querySelector('.temp').innerText = (temp - 273.15).toFixed(0);
        document.querySelector('.location').innerText = `${data.name}, ${data.sys.country}` 
        document.querySelector('.status').innerText = data.weather[0].main
        document.querySelector('.description').innerText = data.weather[0].description
        document.querySelector('.weather-icon').innerHTML = `<img src="assets/${data.weather[0].icon}.png" alt="">`

    } catch (err) {
        document.querySelector('.location').innerText = 'Error'
        document.querySelector('.weather-container').innerHTML = '<p class="err description">Something goes wrong.<br>Try again</p>'
    }
}

getData('hanoi');

let form = document.querySelector('#input');
form.onsubmit = (e) => {
    e.preventDefault()
    let city = form.city.value
    form.city.value = ""
    getData(city)
}

