const express=require('express')
const axios=require('axios')
const dotenv=require('dotenv')

dotenv.config({path:'./config/config.env'})


const router=express.Router()


 router.route('/').get((req,res)=>{

 })
 const appkey=process.env.API_KEY

 let city='new york'
 axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appkey}`)
 .then(response=> {
    const temp=response.data.main.temp
    const coord=response.data.coord
    const humidity=response.data.main.humidity
    const wind=response.data.wind
    const rain=response.data.rain
    const visibility=response.data.visibility
    const weather=({
        temp,
        coord,
        humidity,
        wind,
        rain,
        visibility,

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