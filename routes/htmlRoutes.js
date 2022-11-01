//joining paths
const path = require('path');
//allows us to build routes...and hold all the routes
const router = require('express').Router()

// GET route for notes.html 
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);


// GET Route for homepage index.html
// "*" will grab all the routes that haven't been created yet...make sure this is at the bottom because routes are read top to bottom
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router