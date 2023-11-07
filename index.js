require('dotenv').config()
const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    
    res.send("Your Project is Ready")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Your Server is listning on port ${process.env.PORT} you can visit  no http://localhost:${process.env.PORT}/`)
})