const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
router
  .route("/")
  //Get all inventory
  .get((_req, res) => {
    res.json(inventoryController.getAllInventory());
  });

//create an endpoint that will return an item based on its id.
//If the id does not match, return a 404 status and an error message.
  .route('/inventory/:id')
  .get((_req, res) => {

  })


module.exports = router; git 
