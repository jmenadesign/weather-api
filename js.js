const apiUrl = 'https://www.metaweather.com/api/location/search/?query='


async function callApi(){
    let temperatura = await fetch(apiUrl)
    temperatura = await temperatura.json()
    console.log(temperatura.location_type)
    representar(temperatura.location_type)
}

callApi()



let dameTemperatura = document.getElementById('boton')



dameTemperatura.addEventListener('click',function(){
    
})