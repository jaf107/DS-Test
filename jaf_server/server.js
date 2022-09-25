const express = require('express')
const app = express();

const PORT = 1109

var fs = require('fs');



let students = ["Jafar", "Mushfiq", "Alif", "Noshin"]



app.get("/", (req,res) =>{
    res.status(200).json({
        "message": "Jafar name service  works fine"
    })
})

app.get("/names", (req,res) => {
    res.send(students);
})

app.get("/write", (req,res) =>{
    var file = fs.createWriteStream('./names/students.txt')
    file.on('error', function(err){
        console.log("File open error")
    })

    students.forEach(function(student) {
        console.log(student);
        file.write(student + " \n");
    })

    file.end();
    res.send("Names of students are successfully written");
})

app.listen(PORT, () =>{
    console.log(`Jafar Student Service running on port: ${PORT}`);
})

