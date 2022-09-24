const express = require('express')
const app = express();

const PORT = 7001

app.get("/", (req,res) =>{
    res.status(200).json({
        "message": "Service 1 works fine"
    })
})

app.listen(PORT, () =>{
    console.log(`Service 1 running on port: ${PORT}`);
})

