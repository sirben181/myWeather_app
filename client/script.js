
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
    console.log(data.wind.deg)

    AddData(displayData)
}
fetchWeather()
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
const kelvinToCelsius =(temp)=>{
    return Math.ceil((temp-273.15))

}
const convertToKm=(visibility)=>{
 return Math.ceil((visibility/1000))
}
const directionMaker=(deg)=>{
 
  if(deg===180){
     return deg= 'S'
 }else if(deg===0){
     return deg='N'
 }else if( deg===270){
     return deg='W'
 }else if(deg===90){
     return deg='E'
 }else if(deg <90  && deg> 0){return deg='NE'}
 else if(deg>90 && deg <180){
     return deg='SE'
 }else if(deg> 180 && deg< 270){
     return deg='SW'
 }else if( deg> 270){
     return deg='NW'
 } else{ return}
}