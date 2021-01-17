// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  //function to select all burgers
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //adds a new burger to the list
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //updates the chosen burger to devoured
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burger_controllers.js).
module.exports = burger;
