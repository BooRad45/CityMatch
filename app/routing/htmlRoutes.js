//=======DEPENDENCIES==============================
//We need to include the path package to get the correct file path for our html
const path = require('path');

//=======ROUTING===================================
module.exports = function(app) {

	// HTML GET Requests (GETS a SPECIFIC URL unlike USE which is more general)
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // When the user clicks on a link the router will understand, based on the info in this file,
    //(cont.) what page to deliver
    // ---------------------------------------------------------------------------

app.get("/survey", function(req, res) { //shows the survey page when survey is entered
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

// If no matching route is found default to home (this is using middleware of Express -- 'use')
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });
};



