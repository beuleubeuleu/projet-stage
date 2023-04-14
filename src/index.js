const express = require('express');
require('../config/dbConfig')
require("dotenv").config()

const app = express();

const port = process.env.PORT

app.listen(port, ()=>{
  console.log(`connecter au stage sur le port ${port}`)
})