const Inventory_File = `${__dirname}/../model/inventory.json`;
const helper = require("../helpers/helper");

const inventoryController = {
  getAllInventory: () => {
    return helper.readJSONFile(Inventory_File);
  }
};

module.exports = inventoryController;
