var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var cat = require("../models/burgers.js");

router.get("/", (req, res) => {
  burgers.selectAll((data) => {
      const burgerObject = {
          burgers: data
      };
      res.render("index", burgerObject);
  })
});

router.post("/api/burger", (req, res) => {
  burger.insertOne([req.body.burgername], (result) => {
      // Send back the ID
      res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", (req, res) => {
  let condition = "id = " + req.params.id;
  burger.updateOne(condition, (result) => {
      if (result.affectedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
  });
});
  

  // Export routes for server.js to use.
module.exports = router;
