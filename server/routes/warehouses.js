const express = require("express");
const router = express.Router();
const warehouseController = require("../controllers/warehouseController");
router
  .route("/")
  //Get all warehouses
  .get((_req, res) => {
    res.json(warehouseController.getAllWarehouses());
  });



// router
//   .route('/')
//   .post((req, res) => {
//     const newWarehouse = {
//       id: 
//     }
//   })

module.exports = router;
