# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions

### Setup


1. To setup this project install the following node packages -  `express, cors and body-parser` defined in dependencies in `package.json` by running `npm install` in root.

2. Update `config` JS object  in `website/app.js` with valid API key `const config = { API_KEY: 'valid-api-key-here' };`

3. Then to start server, run the command `node server.js` in your terminal


### Development strategy
* Set up development environment -- Install Node, Create project with `npm init`, install all packages and dependencies. 
* Add POST and GET routes to ensure correct retrieval of data from `openweathermap.org`
* Get API key from `openweathermap.org`
* Created async functions to fetch weather data and store it locally. 
* Set up a function that updated UI.

### Results
![Screenshots](https://github.com/sravanthiganti/weather-journal-app/blob/main/output/Screenshot%20from%202021-05-09%2014-39-19.png)