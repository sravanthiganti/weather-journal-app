# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions

### Setup


1. To setup this project install the following node packages -  `express, cors and body-parser` defined in depedncies in `package.json` by running `npm install` in root.

2. Update `config` JS object  in `website/app.js` with valid API key `const config = { API_KEY: 'valid-api-key-here' };`

3. Then to start server, run the command `node server.js` in your terminal


### Development strategy
* Set up development environment -- Install Node/Create project `npm init`, install all packages and dependencies. 
* Add POST and GET routes to ensure correct retrieval of data from `openweathermap.org`
* Get API key from `openweathermap.org`
* Created async functions to fetch weather data and store it locally. 
* Set up a function that updated UI.

### Results
![Output](weather-journal-app/output/Screenshot from 2021-05-09 14-43-19.png)