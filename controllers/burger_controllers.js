var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name,
  ], function() {
    //"refreshes" the page with the new burger
    res.json({id: result.insertId})
    res.redirect("/");
  });
});

router.put("api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows ==0) {
      return res.
    }
    //"refreshes the page to show the burger has moved to the devoured side"
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
