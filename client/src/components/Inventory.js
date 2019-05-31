import React from "react";
import InventoryTable from "./InventoryTable";
import AddProductButton from "./AddProductButton";
import Add from "../assets/Icons/SVG/Icon-add.svg";

export default function Inventory(props) {
  let { inventory, warehouseNames } = props;
  //   if ((!inventory || Object.keys(inventory).length === 0) || (!warehouseNames || Object.keys(warehouseNames).length === 0)) {
  //Inventory is initialized as empty object before any data is loaded
  if (!inventory || Object.keys(inventory).length === 0) {
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
      <div className="inventoryPage">
        <div className="inventoryPage__header">
          <h1>Inventory</h1>
          <input className="inventoryPage__searchBar" placeholder="Search" />
        </div>
        <InventoryTable
          inventory={inventory}
          removeHandler={props.removeHandler}
          saveHandler={props.saveHandler}
        />
        <div className="add">
          <img className="add--img" src={Add} alt="Plus Sign" />
        </div>
        <AddProductButton
          warehouseNames={warehouseNames}
          postNewItem={props.postNewItem}
        />
      </div>
    );
  }
}
