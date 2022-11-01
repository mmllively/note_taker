//set up api for /notes - GET to show the notes and a POST to create the note 
//api routes page grabbing the data from db.json

const router = require('express').Router()
const fs = require("fs");
const uuid  = require('uuid');

//Get routes for retreiving notes
router.get('/api/notes', (req, res) =>
fs.readFile('./db/db.json', (err, results)=>{
    if (err) {
        throw err;
    } 
    res.send(results)
})
);

// POST Route for submitting note
router.post('/api/notes', (req, res) => {
    // Log that a POST request was received

const notes = JSON.parse(fs.readFileSync("./db/db.json"));
const addNotes = req.body
addNotes.id = uuid.v4();
notes.push(addNotes);
fs.writeFileSync("./db/db.json", JSON.stringify(notes))
res.json(notes);

});

module.exports = router