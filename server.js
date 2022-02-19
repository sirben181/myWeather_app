const express=require('express')
const dotenv=require('dotenv')
const router=require('./routes/index')
dotenv.config({path:'./config/config.env'})

const PORT =process.env.PORT || 6000

const app=express()

app.use(express.json())

app.use(express.urlencoded({extended:false}))

// routing
//home route
app.use('/',router)

//other routes
app.use('/posts',router)

app.listen(PORT,(req,res)=>{
    console.log(`server running on port ${PORT}`)
})