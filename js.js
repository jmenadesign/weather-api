let key='e2caab4e544fbb5e';
let Weather = "https://api.wunderground.com/api/" + key +"/forecast/geolookup/conditions/lang:SP/q/" + "40.7127837" + "," + "-74.00594130000002" + ".json";

let myUrl = 'https://api.wunderground.com/api/e2caab4e544fbb5e/forecast/geolookup/conditions/lang:SP/q/40.7127837,-74.00594130000002.json'


const apiUrl = Weather

async function callApi(){
    let temperatura = await fetch(myUrl)
    console.log(temperatura)
    temperatura = await temperatura.json()
    console.log(temperatura.city)
    //representar(temperatura.city)
}

callApi()



let dameTemperatura = document.getElementById('boton')

dameTemperatura.addEventListener('click',function(){
    document.getElementById("mostrarInfo").innerHTML = "'${conditions.city}'";
})