// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) 
{

  // POST route for saving a new Burger
  app.post("/", function(req, res) 
  {
    db.Burger.create(req.body).then(function(dbBurger) 
    {
      res.redirect("/");
    });
  });

  // DELETE route for deleting posts
  app.delete("/:id", function(req, res) 
  {
    db.Post.destroy(
      {
        where: 
        {
          id: req.params.id
        }
      }).then(function(dbBurger) 
    {
      res.redirect("/");
    });
  });

  // PUT route for updating posts
  app.put("/:id", function(req, res) {
    db.Burger.update(
      {
        devoured: true,
      },
      {
        where: 
        {
          id: req.params.id
        }
      }).then(function(dbBurger) 
      {
        res.redirect("/")
      });
  });
};
