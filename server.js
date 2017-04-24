// *****IF YOU CHANGE CODE IN APP YOU MUST RESTART APP (USE CTRL + C to stop server)*****
// *****To issue requests use this format "CURL http://localhost:3000/" ***************

//HOW IT WORKS///
//============================================================================
//The client (web browser) sends an initial request to our web api server
//Our server responds with html (index.html page)
//The client makes further requests through Javascript and AJAX
//Our web server responds with data (typically in JSON format)
//The web browser uses that JSON to update elements on the page
//This means that interacting with our web api server does not trigger full page reloads
//allows for a more interactive experience on the web

// Dependencies
// =============================================================
//require Express library below
const express = require("express"); //creates a web api SERVER which accepts http requests on root '/' path
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
//on the app object we can call functions that create routes
const app = express(); //application instance stored in 'app' variable
const PORT = 3000;  //storing TCP port in variable so we can bind to it later





// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// use middleware (the only middleware shipped with Express) to do the same thing as app.get
//serves up static (non-changing html files) that we created with USE
app.use(express.static(path.join(__dirname + '/app/public')));

//GET FUNCTION
//================================================================
//the GET function creates a route that accepts http GET requests
// app.get('/', function (request, response) {
// console.log(request); //gives GET function a path to route (the root path '/')
// 	response.sendFile(__dirname + '/app/public/index.html') //callback function uses response ('res') object 
	                       //(cont.)to serve home.html to client browser
// the RESPONSE.SENDFILE function takes the path of the file we want to serve
//__dirname = the name of the directory (or folder) the currently executing script resides in
//in this case it is taking the name "CityMatch" which is the main directory
 
	// })  
	//the CALLBACK FUNCTION runs each time our application receives a 
	//GET request(i.e. someone types in our web page) on root path
	//the callback takes a REQUEST and a RESPONSE object (these are inherited from Node)
	//the REQUEST object inherits from Node's HTTP.IncomingMessage object and the RESPONSE object
	//inherits from Node's HTTP.ServerResponse object
	//Express is essentially extending Node so we can call Node functions from Express apps
	//Ex.s 'response.write' and 'response.end' are both Node functions we can call in Express
	//This is extremely useful when writing extensions for Express
  


//RESPONDING WITH JSON (because our site is not just strings)
//================================================================
//Since we will be working with Objects and Arrays we will (at times) need to serialize data into JSON
//We can create routes with Express that respond with JSON
// app.get('/blocks', function (request, response) {
// 	var blocks = ["Fixed", "Movable", "Rotating"];
// 	response.send(blocks); //to change this array (blocks) to JSON just pass it into the SEND function
// 	//sets proper response headers automatically
// });
//use curl -i (to get header info) http://localhoste:3000/blocks to check (open two terminals -
//running web api and the other to do curl request)
//You'll see content type set to JSON
//If you have a string (instead of an array or object) then use response.json instead of response.send


//REDIRECTING TO A NEW LOCATION (temporarily)
//===============================================================
//the next time a request comes in for /blocks our app will respond with a redirect to /parts
// app.get('/blocks', function (request, response) {
// 	var blocks = ["Fixed", "Movable", "Rotating"];
// 	response.redirect(301, '/parts'); //pass in new destination path as argument
	//the REDIRECT function sets the proper response headers
	// });
	//You can add an optional redirect number to arguments (i.e. 301) depending on situation

//TEST this with curl -i (to get full headers) http://localhost:3000/blocks (remember to open
//2 terminals -- one running app and the other to do curl request)



//Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {  //the listen function also takes an optional callback function as a
	//(cont. from above) second argument. This will run once app is ready to receive requests.
  console.log("App listening on PORT " + PORT); //bind application to TCP port 3000
}); //Once our web api server is up and ready it will console.log "App listening on PORT 3000"



