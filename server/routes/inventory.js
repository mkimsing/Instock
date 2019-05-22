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
router  
  .route('/inventory/:id')
    .get((_req, res) => {
      const inventory = inventory.find(inventory => {
        inventory.id === req.params.inventory;
        if (inventory) {
          res.json(inventory.filter(inventory =>
            inventory.id === req.params.inventory));
          } else {
              res 
                .status (404)
                .json({errorMessage: `Inventory item with ID: ${req.params.id} -- ${req.params.item.name} not found`});
          }
        })
      })

module.exports = router; git 
