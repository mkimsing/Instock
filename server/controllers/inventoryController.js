const Inventory_File = `${__dirname}/../model/inventory.json`;
const Warehouses_File = `${__dirname}/../model/warehouses.json`;
const helper = require("../helpers/helper");

const inventoryController = {
  getAllInventory: () => {
    return helper.readJSONFile(Inventory_File);
  },
  //Function that returns all inventory for a given warehouse ID
  getWarehouseInventory: id => {
    let allInventory = helper.readJSONFile(Inventory_File);
    let allWarehouses = helper.readJSONFile(Warehouses_File);
    let found = allWarehouses.some(warehouse => warehouse.id === id);
    if (found) {
      let warehouseInventory = allInventory.filter(item => {
        return item.warehouseId === id;
      });
      return warehouseInventory;
    } else {
      return { error: 404, errorMsg: `Warehouse with ID: ${id} not found` };
    }
  }
};

module.exports = inventoryController;
