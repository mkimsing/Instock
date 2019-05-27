const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
const helper = require("../helpers/helper");
const fileName = `${__dirname}/../model/inventory.json`;

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
    const inventoryData = inventoryController.getAllInventory();
    const inventory = inventoryData.find(inventory => {
      return inventory.id === req.params.id;
    })
    if (inventory) {
      res.json(inventory)
    } else {
      res
        .status(404)
        .json({ errorMessage: `Inventory item with ID: ${req.params.id} not found` });
    }
  })

//Endpoint that will delete an item specified by id.
router.delete("/:id", (req, res) => {
  const inventory = inventoryController.getAllInventory();
  const found = inventory.some(inventory => inventory.id === req.params.id);
  if (found) {
    const inventoryAfterDeletion = inventory.filter(
      inventory => inventory.id !== req.params.id
    );
    helper.writeJSONFile(fileName, inventoryAfterDeletion);
    res.json({
      msg: `Inventory item with ID: ${req.params.id} has been deleted`,
      inventory: inventoryAfterDeletion
    });
  } else {
    res.status(404).json({
      errorMessage: `Inventory item with ID: ${req.params.id} not found`
    });
  }
});

module.exports = router;
