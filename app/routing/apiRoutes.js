///API ROUTES////////
//============================================================
// api routes are for our data
// these routes help determine what data the a) user sees and b) what data the user is able to post
// (cont.) to our server to store

var cityData = require("../data/city-data.js");
var travelerData = require("../data/traveler-data.js");

module.exports = function(app) {
	app.get('/api/cities', function(req, res) {
			res.json(cityData);
	});

	app.get('/api/travelers', function(req, res) {
			res.json(travelerData);
	});

}


