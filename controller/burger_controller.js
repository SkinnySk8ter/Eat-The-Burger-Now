var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var cat = require("../models/burgers.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Export routes for server.js to use.
module.exports = router;
