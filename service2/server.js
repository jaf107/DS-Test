const express = require('express')
const app = express();

const PORT = 7002

app.get("/", (req,res) =>{
    res.status(200).json({
        "message": "Service 2 works fine"
    })
})

app.listen(PORT, () =>{
    console.log(`Service 2 running on port: ${PORT}`);
})

