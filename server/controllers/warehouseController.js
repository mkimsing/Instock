const Warehouse_File = `${__dirname}/../model/warehouses.json`;
const helper = require("../helpers/helper");

const warehouseController = {
  getAllWarehouses: () => {
    return helper.readJSONFile(Warehouse_File);
  }
};

module.exports = warehouseController;
