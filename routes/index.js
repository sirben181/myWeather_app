const express=require('express')
const axios=require('axios')
const dotenv=require('dotenv')

dotenv.config({path:'./config/config.env'})


const router=express.Router()


 router.route('/').get()
 
 const appkey=process.env.API_KEY

 let city='chuka'
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appkey}`)
 .then(response=> {
     const name=response.data.name
    const temp=response.data.main.temp
    const pressure=response.data.main.pressure
    const coord=response.data.coord
    const humidity=response.data.main.humidity
    const wind=response.data.wind
    const rain=response.data.rain
    const visibility=response.data.visibility
    const sunrise=response.data.sys.sunrise
    const sunset=response.data.sys.sunset
    // console.log(sunset)
    const weather=({
        name,
        temp,
        pressure,
        coord,
        humidity,
        wind,
        rain,
        visibility,
        sunrise,
        sunset

    })
 router.route('/posts').get((req,res)=>{
 
     res.json(weather)
     // console.log(response)
 })
//   .catch((error)=>{
//       console.log(error)
//   })
 //  res.json(nairobiweather)


})

 module.exports=router