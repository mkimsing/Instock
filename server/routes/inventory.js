const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
const helper = require("../helpers/helper");
const fileName = `${__dirname}/../model/inventory.json`;

let inventories = require(fileName);

router
  .route("/")
  //Get all inventory
  .get((_req, res) => {
    res.json(inventoryController.getAllInventory());
  })
  // post new inventory item
  .post((req, res) => {
    let { id, item, location, categories, lastOrdered, orderedBy, quantity, status, warehouseId } = req.body;
    if (
      !id ||
      !item.name ||
      !item.description ||
      !item.productId ||
      !location.city ||
      !location.country ||
      !categories ||
      !lastOrdered ||
      !orderedBy ||
      !quantity ||
      !status ||
      !warehouseId
    ) {
      return res.status(400).json({
        errorMessage: "Please ensure all fields are included before submitting."
      });
    }
    inventories.push(req.body);
    helper.writeJSONFile(fileName, inventories);
    res.json(inventories);
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
