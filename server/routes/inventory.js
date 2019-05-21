const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventoryController");
router
  .route("/")
  //Get all inventory
  .get((_req, res) => {
    res.json(inventoryController.getAllInventory());
  });

module.exports = router;
