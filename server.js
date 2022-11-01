const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;
//invoking express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//making the public folder accessible in port 3001
app.use(express.static('public'));

//this attaches to the apiRoutes.js and the htmlRoutes.js
app.use(api);
app.use(html);


app.listen(PORT, () => {
    console.log("running on port" , PORT);
})


