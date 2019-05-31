const Inventory_File = `${__dirname}/../model/inventory.json`;
const Warehouses_File = `${__dirname}/../model/warehouses.json`;
const helper = require("../helpers/helper");

const inventoryController = {
  getAllInventory: () => {
    return helper.readJSONFile(Inventory_File);
  },
  //Function that returns all inventory for a given warehouse ID
  // May return empty array if no values
  getWarehouseInventory: id => {
    let allInventory = helper.readJSONFile(Inventory_File);
    let allWarehouses = helper.readJSONFile(Warehouses_File);
    let found = allWarehouses.some(warehouse => {
      return warehouse.id === id;
    });
    if (found) {
      let warehouseInventory = allInventory.filter(item => {
        return item.warehouseId === id;
      });
      return warehouseInventory;
    } else {
      return { error: 404, errorMsg: `Warehouse with ID: ${id} not found` };
    }
  },
  //Function to edit an inventory item
  editInventoryItem: (itemId, newData) => {
    if (
      !newData ||
      !newData.item ||
      !newData.orderedBy ||
      !newData.id ||
      !newData.location ||
      !newData.quantity ||
      !newData.status ||
      !newData.categories
    ) {
      return {
        error: 400,
        errorMsg: `Please provide JSON data in the following format: 
  {
    "id": "1",
    "item": {
      "productId": "12341",
      "name": "Hartz Zoo Balloons Dog Toy",
      "description": "Toss and Retrieve Toy"
    },
    "orderedBy": "Fifi Smith",
    "lastOrdered": "05/04/2018",
    "location": { "city": "Toronto", "country": "CA" },
    "quantity": "120",
    "status": "In Stock",
    "warehouseId": "1",
    "categories": ["Dog", "Toy", "Pet"]
  }`
      };
    } else {
      let allInventory = helper.readJSONFile(Inventory_File);
      let foundItem = allInventory.find(item => {
        return item.id === itemId;
      });

      if (foundItem) {
        let {
          item,
          orderedBy,
          lastOrdered,
          location,
          quantity,
          status,
          categories
        } = newData;


        foundItem.item.description = item.description;
        foundItem.orderedBy = orderedBy;
        foundItem.item.productId = item.productId;
        foundItem.lastOrdered = lastOrdered;
        foundItem.location = location;
        foundItem.quantity = quantity;
        foundItem.status = status;
        foundItem.categories = categories;

        // allInventory.push(foundItem);
        helper.writeJSONFile(Inventory_File, allInventory);

        return { foundItem };
      } else {
        return { error: 404, errorMsg: `No id found with id: ${itemId}` };
      }
    }
  }
};

module.exports = inventoryController;
