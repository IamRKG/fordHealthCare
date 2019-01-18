const express = require("express" )
const mongoose = require("mongoose")
const config = require("./config")
const routers = require("./ford/api/patients/routers");

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(config.getDBConnectionString(),{useNewUrlParser: true})

routers(app)

app.listen(port,()=> console.log("server listing 3000"));