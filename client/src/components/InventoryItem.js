import React from "react";

export default function InventoryItem() {
  //TODO Make this dynamic using props for data
  return (
    // Mobile
    <div className="item">
      <div className="item__flexContainer">
        <div className='kebabContainer'>
          <h5 className='tableHeader'> ITEM </h5>
          <button className='kebabButton'></button>
        </div>
        <div className="item__text">
          <h2>Product Name Here</h2>
          <h4>
            Here is a very brief description of the product in the inventory
          </h4>
        </div>
        <h5 className='tableHeader'>LAST ORDERED</h5>
        <h4 className='tableCell'> 05/24/2018</h4>
        <h5 className='tableHeader'>LOCATION</h5>
        <h4 className='tableCell'> Toronto, CAN</h4>
        <h5 className='tableHeader'> QUANTITY</h5>
        <h4 className='tableCell'> 12,000</h4>
        <h5 className='tableHeader'>STATUS</h5>
        <div className='tableCell' id='kebabCell' >
          <h4>In Stock</h4>
          <button className='kebabButton fullSizeOnly'></button>
        </div>
      </div>
    </div>
  );
}
