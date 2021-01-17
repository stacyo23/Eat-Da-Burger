//uses the express dependency
var express = require("express");

//sets up backend routes
var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// route to show all burgers on index page
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


//route to create a new burger 

router.post("/api/burgers", function(req, res) {

console.log(req.body);
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.name, false
  ], function(result) {
    //"refreshes" the page with the new burger
    res.json({id: result.insertId})
    // res.redirect("/");
  });
});

// route to update burgers at the selected id
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows ==0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;
