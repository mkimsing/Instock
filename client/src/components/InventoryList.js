import React from "react";
import InventoryItem from "../components/InventoryItem";
export default function InventoryList() {
  return (
    <div className="inventoryPage">
      <div>
        <h1>Inventory</h1>
        <input />
      </div>
      <div>
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
      </div>
    </div>
  );
}
