// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/", function(req, res) 
  {
    db.Burger.findAll({}).then(function(dbBurgers) 
    {
      console.log(dbBurgers);
      var hbsObject = {Burger: dbBurgers};

      res.render("index", hbsObject);;
    });
  });
};
