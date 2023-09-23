const http = require("http");
const app = require("./app")
const express = require('express');

require("dotenv").config();
const dbconfig = require("./config/dbconfig")




const server = http.createServer(app);

const proroutes = require("./routes/proroutes");
app.use(express.json());
app.use("/api/project", proroutes);




app.listen(5500 , ()=>{
    console.log("server is running in 5500");
});