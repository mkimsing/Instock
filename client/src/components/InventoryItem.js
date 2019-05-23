import React from "react";
import KebabButton from "./KebabButton";
export default class InventoryItem extends React.Component {
  render() {
    let { item, lastOrdered, location, quantity, status } = this.props.item;
    return (
      <div className="item">
        <div className="item__flexContainer">
          <div className="topRow mobileOnly">
            <h5 className="tableHeader"> ITEM </h5>
            <KebabButton />
          </div>
          <div className="item__text">
            <h2>{item.name}</h2>
            <h4>{item.description}</h4>
          </div>
          <h5 className="tableHeader">LAST ORDERED</h5>
          <h4 className="tableCell"> {lastOrdered}</h4>
          <h5 className="tableHeader">LOCATION</h5>
          <h4 className="tableCell"> {location}</h4>
          <h5 className="tableHeader"> QUANTITY</h5>
          <h4 className="tableCell"> {quantity}</h4>
          <h5 className="tableHeader">STATUS</h5>
          <div className="tableCell" id="kebabCell">
            <h4>{status}</h4>
            <div className="fullSizeOnly">
              <KebabButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
