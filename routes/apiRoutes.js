//set up api for /notes - GET to show the notes and a POST to create the note 
//api routes page grabbing the data from db.json

const router = require('express').Router()
const fs = require("fs");

router.get('/api/notes', (req, res) =>
fs.readFile('./db/db.json', (err, results)=>{
    if (err) {
        throw err;
    } 
    res.send(results)
})
);

//POST

module.exports = router