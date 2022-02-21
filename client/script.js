const res = require("express/lib/response")

const city=document.querySelector('.city')
const results=document.querySelector('.results')
const btn=document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
e.preventDefault()
city.target.value;
console.log(city.target.value)

})
const fetchWeather=async()=>{
    const weather=await fetch('http://localhost:6000/posts')
    const res=await res.json()
    console.log(res)
}
fetchWeather()
