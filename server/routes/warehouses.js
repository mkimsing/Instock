const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");
const helper = require("../helpers/helper");
const fileName = `${__dirname}/../model/warehouses.json`
let warehouses = require(fileName);

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
      // randomised ID
      id: req.body.id,
      location: {
        address: req.body.location.address,
        city: req.body.location.city
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
      !newWarehouse.location.address || !newWarehouse.location.city ||
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

module.exports = router;
