import React from "react";
import RightArrow from "../assets/Icons/SVG/Icon-arrow-right.svg";
import { Link } from "react-router-dom";
import AddWarehouseButton from "./AddWarehouseButton";

function AllWarehouses(props) {
  if (!props.warehouses || Object.keys(props.warehouses.length === 0))
    return (
      <>
        <div className="warehousesPage">
          <div className="warehousesPage__header">
            <h1 className="warehousesPage__header--title">Locations</h1>
            <form>
              <div className="warehousesPage__header--search">
                <input
                  className="warehousesPage__header--search warehousesPage__header--searchBar"
                  type="text"
                  name="search"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="warehousesPage__desktop--categories">
            <div>WAREHOUSE</div>
            <div>CONTACT</div>
            <div>CONTACT INFORMATION</div>
            <div>CATEGORIES</div>
          </div>
          <div>
            <WarehousesList warehouses={props.warehouses} />
          </div>
        </div>
        <AddWarehouseButton postNewWarehouse={props.postNewWarehouse} />
      </>
    );
}

function WarehousesList(props) {
  const warehouseArray = props.warehouses;
  if (Object.keys(warehouseArray).length === 0) return <div>Loading...</div>;
  const warehouseList = warehouseArray.map(warehouse => {
    return <Warehouse warehouse={warehouse} key={warehouse.id} />;
  });
  return <div>{warehouseList}</div>;
}

function Warehouse(props) {
  return (
    <div className="warehousesPage__table">
      <div className="warehousesPage__left">
        <div className="warehousesPage__warehouse">
          <div className="warehousesPage__warehouse--nameLoc">
            <div className="warehousesPage__warehouse--name">
              {props.warehouse.name}
            </div>
            <div className="warehousesPage__warehouse--loc">
              {props.warehouse.location.address1},{" "}
              {props.warehouse.location.region}
            </div>
          </div>
          <Link to={`/warehouses/${props.warehouse.id}`}>
            <div className="warehousesPage__warehouse--arrow">
              <img src={RightArrow} alt='arrow' />
            </div>
          </Link>
        </div>
        <div className="warehousesPage__bottom">
          <div className="warehousesPage__contact--namePos">
            <div className="warehousesPage__contact--name">
              {props.warehouse.contact.name}
            </div>
            <div className="warehousesPage__contact--pos">
              {props.warehouse.contact.position}
            </div>
          </div>
          <div className="warehousesPage__contact--info">
            <div className="warehousesPage__contact--phone">
              {props.warehouse.contact.phone}
            </div>
            <a
              className="warehousesPage__contact--email"
              href={"mailto:" + props.warehouse.contact.email}
            >
              {props.warehouse.contact.email}
            </a>
          </div>
          <div className="warehousesPage__categories">
            <div>{props.warehouse.categories.join(', ')}</div>
            <Link to={`/warehouses/${props.warehouse.id}`}>
              <div className="warehousesPage__desktop--arrow">
                <img src={RightArrow} alt='arrow' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllWarehouses;
