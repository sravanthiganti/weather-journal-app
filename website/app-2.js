/* Global Variables */
const baseurl_zip = 'http://api.openweathermap.org/data/2.5/weather?zip=';
// The URL for api key parameter
const API_KEY = `&appid=${config.API_KEY}`;


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
const getButton = document.getElementById('generate');
getButton.addEventListener('click',clickRespond)

/* Function called by event listener */

function clickRespond(){
    
}