const express = require("express")

const app = express();

// this is a routes 
app.use('////', (req, res, next)=>{
    res.status(200).json({
        "message":"It Works!!"
    });
});

module.exports=app;