const express = require("express" )
const mongoose = require("mongoose")
const config = require("./config")
const routers = require("./ford/api/patients/routers");

const app = express();

const port = process.env.PORT || 3000;

const options = {
    useMongoClient: true,
    autoIndex: false, // Don't build indexes
    reconnectTries: 10000, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true
};

mongoose.connect(config.getDBConnectionString(), options).then( () =>{
    console.log("Connected")
},(error)=>{
    console.log("err",error);
})

routers(app)

app.listen(port,()=> console.log("server listing 3000"));