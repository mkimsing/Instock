const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");

const helper = require("../helpers/helper");
const fileName = `${__dirname}/../model/warehouses.json`
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
    const newWarehouse = {
      name: req.body.name,
      id: req.body.id,
      location: {
        address1: req.body.location.address1,
        address2: req.body.location.address2,
        region: req.body.location.region,
        postalCode: req.body.location, postalCode
      },
      contact: {
        name: req.body.contact.name,
        position: req.body.contact.position,
        phone: req.body.contact.phone,
        email: req.body.contact.email
      },
      categories: req.body.categories
    };
    if (!newWarehouse.name || !newWarehouse.id ||
      !newWarehouse.location.address1 || !newWarehouse.location.address2 ||
      !newWarehouse.location.region || !newWarehouse.location.postalCode ||
      !newWarehouse.contact.name || !newWarehouse.contact.position ||
      !newWarehouse.contact.phone || !newWarehouse.contact.email ||
      !newWarehouse.categories) {
      return res.status(400).json({
        errorMessage: "Please ensure all fields are included before submitting."
      })
    }
    warehouses.push(newWarehouse);
    helper.writeJSONFile(fileName, warehouses);
    res.json(warehouses)
  })

router
  .route('/:id')
  .get((req, res) => {
    const warehousesData = warehousesController.getAllWarehouses();
    const warehouse = warehousesData.find(warehouse => {
      return warehouse.id === req.params.id;
    })
    if (warehouse) {
      res.json(warehouse)
    } else {
      res
        .status(404)
        .json({ errorMessage: `Warehouse with ID: ${req.params.id} not found` });
    }
  })

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
