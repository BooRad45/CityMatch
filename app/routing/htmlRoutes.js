//Set your dependencies here.
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
var router = express.Router();

// use middleware (the only middleware shipped with Express) to do the same thing as app.get
//serves up static (non-changing html files) that we created with USE
router.use(express.static('public'));

module.exports = router;


