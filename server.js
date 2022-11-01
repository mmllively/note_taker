const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes');
const html = require('./routes/htmlRoutes');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//this attaches to the apiRoutes.js and the htmlRoutes.js
app.use('/api', api);
app.use('/html', html);

app.use(express.static('public'));



