document.querySelector('.form-search').addEventListener('submit', async (event) => {

    event.preventDefault()

    const cityName = document.querySelector('#city_name').value

    if(!cityName){

        document.querySelector('.weather').classList.remove('show')
        document.querySelector('.alert').classList.add('show')
        const flex = document.querySelector('.alert')
        flex.style.display = 'flex'

        escreverCodigo(`

            <h3>Campo vazio, digite uma cidade.</h3>
            <img src="/src/images/cancel.svg"/>
        `)
        return
    }

    const apiKey = '742c1393408742d88a71ef98e6958880'

    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityName)}&appid=${apiKey}&units=metric&lang=pt_br`

    const resultado = await fetch(ApiUrl)
    const dadosApi = await resultado.json()

    if(dadosApi.cod === 200){

        const flex = document.querySelector('.alert')
        flex.style.display = 'none'
        mostrarDados(
            {
                city: dadosApi.name,
                country: dadosApi.sys.country,
                temp: dadosApi.main.temp,
                tempMax: dadosApi.main.temp_max,
                tempMin: dadosApi.main.temp_min,
                description: dadosApi.weather[0].description,
                tempIcon: dadosApi.weather[0].icon,
                windSpeed: dadosApi.wind.speed,
                humidity: dadosApi.main.humidity,
            }
        )
    } else{

        document.querySelector(".weather").classList.remove('show')
        document.querySelector('.alert').classList.add('show')
        const flex = document.querySelector('.alert')
        flex.style.display = 'flex'

        escreverCodigo(`

        <h3>Digite uma cidade válida.</h3>
        <img src="/src/images/campo-vazio.svg"/>
    `)
    }
})

function mostrarDados(dadosApi){

    document.querySelector('.title').innerHTML = `${dadosApi.city}, ${dadosApi.country}`

    document.querySelector('.temp_value').innerHTML = `${dadosApi.temp.toFixed(1).toString().replace('.',',')} <sup>C°</sup>`

    document.querySelector('.temp_description').innerHTML = `${dadosApi.description}`

    document.querySelector('.temp_img').setAttribute('src', `https://openweathermap.org/img/wn/${dadosApi.tempIcon}@2x.png`)

    document.querySelector('.temp_max').innerHTML = `${dadosApi.tempMax.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`

    document.querySelector('.temp_min').innerHTML = `${dadosApi.tempMin.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`

    document.querySelector('.humidity').innerHTML = `${dadosApi.humidity}%`

    document.querySelector('.wind').innerHTML = `${dadosApi.windSpeed.toFixed(1)}km/h`

    document.querySelector('.alert').classList.remove('show')

    document.querySelector(".weather").classList.add('show')
}

function escreverCodigo(msg){

    document.querySelector('.alert').innerHTML = msg
}