import React from "react";
import InventoryItem from "./InventoryItem";
export default function InventoryTable() {
  return (
    <section className='inventoryTable'>
      <div className='inventoryTable__Headers'>
        <h5>ITEM</h5>
        <h5>LAST ORDERED</h5>
        <h5>LOCATION</h5>
        <h5>QUANTITY</h5>
        <h5>STATUS</h5>
      </div>
      <div>
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
        <InventoryItem />
      </div>
    </section>
  );
}
