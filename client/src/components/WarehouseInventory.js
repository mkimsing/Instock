import React from "react";
import InventoryTable from "./InventoryTable";
import { Link } from 'react-router-dom'
export default function WarehouseInventory(props) {
  let { inventory, warehouseData } = props;
  if (!inventory || !warehouseData || Object.keys(inventory).length === 0 || Object.keys(warehouseData).length === 0) {
    return (
      <div className="warehouseInventory">
        <div className="warehouseInventory__header">
          <Link to='/warehouses'>
          </Link>
          <h1>{warehouseData.name}</h1>
        </div>
        <h3> Loading... </h3>
      </div>
    );
  } else {
    return (
      <>
        <div className="warehouseInventory">
          <div className="warehouseInventory__header">
            <Link to='/warehouses'>
            </Link>
            <h1>{warehouseData.name}</h1>
          </div>
          <section className="warehouseInfo">
            <section className="warehouseInfo__addressContainer">
              <h5> ADDRESS </h5>
              <div className='addressInfo'>
                <h4> {warehouseData.location.address1}</h4>
                <h4 className="text--italic"> {warehouseData.location.address2}</h4>
              </div>
              <div className='postalInfo'>
                <h4 className="text--italic"> {warehouseData.location.region} </h4>
                <h4 className="text--italic"> {warehouseData.location.postalCode}</h4>
              </div>
            </section>

            <section className="warehouseInfo__contactContainer">
              <h5> CONTACT </h5>
              <div className='nameInfo'>
                <h4 >{warehouseData.contact.name} </h4>
                <h4 className="text--italic"> {warehouseData.contact.position} </h4>

              </div>
              <div className='contactInfo'>
                <h4 className="text--italic">{warehouseData.contact.phone} </h4>
                <h4 className="text--italic">{warehouseData.contact.email} </h4>

              </div>
            </section>
          </section>
        </div>
        <div className='tableBG'>
          <div className='tableContainer'>
            <InventoryTable inventory={inventory} />
          </div>
        </div>
      </>
    );
  }
}
