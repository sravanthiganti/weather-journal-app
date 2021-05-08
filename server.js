// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
// Adding express,body-parser and cors imports here.
const express = require('express');
const bodyParser = require('body-parser');

// Cors for cross origin allowance
const cors = require('cors');
const { response } = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8080;
const server = app.listen(port,listening())

function listening(){
    console.log(`APP is listening at ${port}`)
}

// GET route
// Initialize all route with a callback function
app.get('/all', getInfo);

// Callback function to complete GET '/all'
function getInfo(req, res) {
    res.send(projectData);
};


// POST route
app.post('/add', addInfo);

function addInfo(req, res) {
    projectData['temp'] = req.body.temp;
    projectData['date'] = req.body.date;
    projectData['content'] = req.body.content;
    res.send(projectData);
}