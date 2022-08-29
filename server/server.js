const express = require("express")
const db = require("./db")
const Pizza = require('./models/productModel')
var cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/' , (req , res)=>{
    res.send("server and mongodb both are working properly")
})

app.get('/getproducts',(req , res)=>{
    Pizza.find({} , (err , docs)=>{
        if(err){
            console.log(err)
        }else{
            res.send(docs)
        }
    })
})



const port = process.env.PORT || 8000

app.listen(port , ()=>"Listening on port 8000")