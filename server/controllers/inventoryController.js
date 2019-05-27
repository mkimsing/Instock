const Inventory_File = `${__dirname}/../model/inventory.json`;
const helper = require("../helpers/helper");

const inventoryController = {
  getAllInventory: () => {
    return helper.readJSONFile(Inventory_File);
  },
  //Function that returns all inventory for a given warehouse ID
  getWarehouseInventory: (id) => {
    let allInventory = helper.readJSONFile(Inventory_File);
    let warehouseInventory = allInventory.filter(item => {
      return item.warehouseId === id
    })

    if (!warehouseInventory || warehouseInventory.length === 0) {
      return ({ error: 404, errorMsg: `Warehouse with ID: ${id} not found` })
    }
    else {
      return warehouseInventory;
    }
  }
};

module.exports = inventoryController
