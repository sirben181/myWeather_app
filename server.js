const express=require('express')
const dotenv=require('dotenv')
const router=require('./routes/index')
const path=require('path')
dotenv.config({path:'./config/config.env'})

const PORT =process.env.PORT || 6000

const app=express()
//serving static files

app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(express.static('client'))

// routing
//home route
//other routes

app.use('/',router)
app.use('/posts',router)
app.listen(PORT,(req,res)=>{
    console.log(`server running on port ${PORT}`)
})