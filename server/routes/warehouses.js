const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");
const inventoryController = require("../controllers/inventoryController");
router
  .route("/")
  //Get all warehouses
  .get((_req, res) => {
    res.json(warehouseController.getAllWarehouses());
  });

router.route("/:id/inventory").get((req, res) => {
  let response = inventoryController.getWarehouseInventory(req.params.id)
  if (response.error) {
    res
      .status(response.error)
      .json(response.errorMsg);
  } else {
    res.json(response)
  }
})

module.exports = router;
