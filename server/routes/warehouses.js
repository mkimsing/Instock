const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");
router
  .route("/")
  //Get all warehouses
  .get((_req, res) => {
    res.json(warehouseController.getAllWarehouses());
  });

module.exports = router;
