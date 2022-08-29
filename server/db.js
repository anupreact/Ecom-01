const mongoose = require("mongoose")

var mongoURL = 'mongodb+srv://iamanup_17:Yamaharx100@cluster0.3wwaox9.mongodb.net/mern-ecommerce'

mongoose.connect(mongoURL , { useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection;
db.on('connected' , ()=>{
    console.log('mongodb connection successfull')
})
db.on('error',() => { 
    console.log('mongo connection failed')
 })

 module.exports = mongoose;