
const city=document.querySelector('.city')
const results=document.querySelector('.results')
const btn=document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
e.preventDefault()
city.target.value;
console.log(city.target.value)

})
const fetchWeather=async()=>{

    const res=await fetch('http://localhost:5000/posts')
    const data=await res.json()
    
    const displayData={
        city:data.name,
        temp:kelvinToCelsius(data.temp),
        humidity:data.humidity,
        lat:data.coord.lat,
        lon:data.coord.lon,
        visibility:convertToKm(data.visibility),
        windspeed:data.wind.speed,
        deg:directionMaker(data.wind.deg),
        sunrise:(data.sunrise),
        sunset:data.sunset,
        pressure:data.pressure

    }
    console.log(data.pressure)

    AddData(displayData)
}
fetchWeather()
const AddData=(data)=>{
results.innerHTML=`
<h1>The weather in ${data.city} of lat ${data.lat}& long ${data.lon} is: </h1>
<p>Temperature is ${data.temp}&deg;C </p> 
<p>Humidity of ${data.humidity} %</p>
<p>and pressure of ${data.pressure}hpa </p>
<p>with a visibility of ${data.visibility} km</p>
<p>wind speed is ${data.windspeed} miles/hr</p>
<p>flowing from ${data.deg} </p>
`
}
const kelvinToCelsius =(temp)=>{
    return Math.ceil((temp-273.15))

}
const convertToKm=(visibility)=>{
 return Math.ceil((visibility/1000))
}
const directionMaker=(deg)=>{
 if(deg===220){
   return  deg= 'Sw'
 }
}