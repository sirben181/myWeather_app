// const { default: axios } = require("axios")

const city=document.querySelector('.city')
const results=document.querySelector('.results')
// const btn=document.querySelector('.btn')
const input=document.querySelector('form')
input.addEventListener('submit',(e)=>{
 e.preventDefault()
  sendCity(city.value)
 city.value=''
})
const sendCity= async()=>{
console.log(city.value)
}
 // this is fetching the weather from the backend
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
    // console.log(data.wind.deg)

    AddData(displayData)
}
fetchWeather()
// adding data to the dom
const AddData=(data)=>{
results.innerHTML=`
<h1>The weather in ${data.city} of lat ${data.lat}&deg; & long ${data.lon}&deg; is: </h1>
<p>Temperature is ${data.temp}&deg;C </p> 
<p>Humidity of ${data.humidity} %</p>
<p>and pressure of ${data.pressure}hpa </p>
<p>with a visibility of ${data.visibility} km</p>
<p>wind speed is ${data.windspeed} m/s</p>
<p>flowing from ${data.deg} </p>
`
}
//converting to deg celsius
const kelvinToCelsius =(temp)=>{
    return Math.ceil((temp-273.15))

}
// converting into km
const convertToKm=(visibility)=>{
 return Math.ceil((visibility/1000))
}
// getting the direction from the degrees
const directionMaker=(deg)=>{
   if(deg===180){
     return deg= 'S'
 }else if(deg===0){
     return deg='N'
 }else if( deg===270){
     return deg='W'
 }else if(deg===90){
     return deg='E'
 }else if(deg <90  && deg> 0)
 {return deg='NE'}
 else if(deg>90 && deg <180){
     return deg='SE'
 }else if(deg> 180 && deg< 270){
     return deg='SW'
 }else if( deg> 270){
     return deg='NW'
 } else{ return}
}