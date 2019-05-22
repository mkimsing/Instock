import React from "react";

export default function InventoryItem() {
  return (
    // Mobile
    <div className="item">
      <div className="item__flexContainer">
        <h5> ITEM </h5>
        <div className="item__text">
          <h2>Product Name Here</h2>
          <h4>
            Here is a very brief description of the product in the inventory
          </h4>
        </div>
        <h5>LAST ORDERED</h5>
        <h4> 05/24/2018</h4>
        <h5>LOCATION</h5>
        <h4> Toronto, CAN</h4>
        <h5> QUANTITY</h5>
        <h4> 12,000</h4>
        <h5>STATUS</h5>
        <h4>In Stock</h4>
      </div>
    </div>
  );
}
