// Dependencies
// =============================================================
//require Express library below
var express = require("express"); //creates a web api server which accepts http requests on root '/' path
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
//on the app object we can call functions that create routes
var app = express(); //application instance stored in 'app' variable
var PORT = 3000;  //storing TCP port in variable so we can bind to it later

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

//GET FUNCTION
//================================================================
//the GET function creates a route that accepts http GET requests
app.get('/', function (req, res) { //gives GET function a path to route (the root path '/') and
	//a callback function which runs each time our application receives a GET request on root path
	//the callback takes a request and a response object
  res.send('Hello World')
  //callback function uses response ('res') object to send back text "Hello World"
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {  //the listen function also takes an optional callback function as a
	//(cont. from above) second argument. This will run once app is ready to receive requests.
  console.log("App listening on PORT " + PORT); //bind application to TCP port 3000
}); //Once our web api server is up and ready it will console.log "App listening on PORT 3000"



