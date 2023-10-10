const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app= express()
const port = process.env.port || 5000 ;

//middleware

app.use(cors())
app.use(express.json())

//  cofeeMaster
//   St1ly9Obblz32krc


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nlpzidc.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri)
app.get("/", (req, res)=>{
    res.send("coffee maker is running")
})
app.listen(port, ()=>{
    console.log(`coffee server is running on port, ${port}`)
})