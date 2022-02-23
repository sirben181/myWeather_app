
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
        lat:data.coord.lat,
        lon:data.coord.lon,
        visibility:data.visibility,
        windspeed:data.wind.speed,
        sunrise:(data.sunrise),
        sunset:data.sunset

    }
    console.log(data.sunrise)

    AddData(displayData)
}
fetchWeather()
const AddData=(data)=>{
results.innerHTML=`
<h1>The weather in ${data.city} of lat ${data.lat}& long ${data.lon} is: </h1>
<p>Temperature is ${data.temp}&deg;C </p>
<p>with a visibility of ${data.visibility}</p>
<p>wind speed is ${data.windspeed} miles/hr</p>
`
}
const kelvinToCelsius =(temp)=>{
    return Math.ceil((temp-273.15))

}