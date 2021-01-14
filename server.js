require('dotenv').config();

//sets express
var express = require('express');
//sets handlebars
var exphbs =require('express-handlebars')

var PORT =process.env.PORT || 8080;

var app =express(); 

//serves static content from the public directory to the application
app.use(express.static("public")); 

//parses into human-readable content
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//creates a default layout pointing to the main.handlebars file
app.engine("handlebars", exphbs({ defaultLayout: "main"})); 
//sets up handlebars
app.set("view engine", "handlebars"); 

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
