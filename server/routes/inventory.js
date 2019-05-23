const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
router
  .route("/")
  //Get all inventory
  .get((_req, res) => {
    res.json(inventoryController.getAllInventory());
  });

//Endpoint that will return an item based on its id.
//If the id does not match, return a 404 status and an error message.
router  
  .route('/:id')
    .get((req, res) => {
      const inventoryData =inventoryController.getAllInventory();
      const inventory = inventoryData.find(inventory => {
        return inventory.id === req.params.id;})
        if (inventory) {
          res.json(inventory)
          } else {
              res 
                .status (404)
                .json({errorMessage: `Inventory item with ID: ${req.params.id} not found`});
          }
        })
      
//Endpoint that will delete an item specified by id.
router
  .delete('/inventory/:id', (req, res) => {
    const found = inventory.some(
      inventory => inventory.id === parseInt(req.params.id)
    );
    if (found) {
      const inventoryAfterDeletion = inventory.filter(
        inventory => inventory.id !== parseInt(req.params.id)
      );
      helper.writeJSONfile(fileName, inventoryAfterDeletion);
      res.json({
        msg: `Inventory item with ID: ${req.params.id} -- ${req.params.item[name]} has been deleted`,
        inventory: inventoryAfterDeletion
      });
    } else {
      res
        .status(404)
        .json({ errorMessage: `Inventory item with ID: ${req.params.id} not found` })
    }
  })


module.exports = router; 
