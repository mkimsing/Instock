const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");

const helper = require("../helpers/helper");
const fileName = `${__dirname}/../model/warehouses.json`;
let warehouses = require(fileName);

const inventoryController = require("../controllers/inventoryController");

router
  .route("/")
  //Get all warehouses
  .get((_req, res) => {
    res.json(warehouseController.getAllWarehouses());
  })
  // post new warehouse
  .post((req, res) => {
    if (
      !req.body ||
      !req.body.name ||
      !req.body.id ||
      !req.body.location.address1 ||
      !req.body.location.address2 ||
      !req.body.location.region ||
      !req.body.location.postalCode ||
      !req.body.contact.name ||
      !req.body.contact.position ||
      !req.body.contact.phone ||
      !req.body.contact.email ||
      !req.body.categories
    ) {
      return res.status(400).json({
        errorMessage: "Please ensure all fields are included before submitting."
      });
    }
    warehouses.push(req.body);
    helper.writeJSONFile(fileName, warehouses);
    res.json(warehouses);
  });

router.route("/:id").get((req, res) => {
  const warehousesData = warehousesController.getAllWarehouses();
  const warehouse = warehousesData.find(warehouse => {
    return warehouse.id === req.params.id;
  });
  if (warehouse) {
    res.json(warehouse);
  } else {
    res
      .status(404)
      .json({ errorMessage: `Warehouse with ID: ${req.params.id} not found` });
  }
});

router.route("/:id/inventory").get((req, res) => {
  let response = inventoryController.getWarehouseInventory(req.params.id);
  if (response.error) {
    res.status(response.error).json(response.errorMsg);
  } else {
    res.json(response);
  }
});

module.exports = router;
