var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = 
    {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) 
{
  //console.log(req.body);
  burger.insertOne(
    [
    "burger_name"
    ], 
    [
    req.body.burger_name
    ], function() 
    {
    res.redirect("/");
    });
});

router.put("/:id", function(req, res) 
{
  var id = "id = " + req.params.id;

  //console.log("condition: ", id);

  burger.updateOne(
    {
        devoured: true
    }, id, function() 
    {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
