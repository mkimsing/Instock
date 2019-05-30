import React from "react";
import InventoryTable from "./InventoryTable";
import AddProductButton from "./AddProductButton";

export default function Inventory(props) {
  let { inventory, warehouseNames } = props;
  if ((!inventory || Object.keys(inventory).length === 0) || (!warehouseNames || Object.keys(warehouseNames).length === 0)) {
    return (
      <div className="inventoryPage">
        <div className="inventoryPage__header">
          <h1>Inventory</h1>
          <input placeholder="Search" />
        </div>
        <h3> Loading... </h3>
      </div>
    );
  } else {
    return (
      <>
        <div className="inventoryPage">
          <div className="inventoryPage__header">
            <h1>Inventory</h1>
            <input placeholder="Search" />
          </div>
          <InventoryTable inventory={inventory} />
        </div>
        <AddProductButton warehouseNames={warehouseNames} postNewItem={props.postNewItem} />
      </>
    );
  }
}
