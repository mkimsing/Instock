import React from "react";
import KebabButton from "./KebabButton";
import { Link } from "react-router-dom";
export default class InventoryItem extends React.Component {
  render() {
    let { item, lastOrdered, location, quantity, status } = this.props.item;
    return (
      <div className="item">
        <div className="item__flexContainer">
          <div className="topRow mobileOnly">
            <h5 className="tableHeader"> ITEM </h5>
            <KebabButton
              id={this.props.item.id}
              removeHandler={this.props.removeHandler}
            />
          </div>
          <div className="item__text">
            <Link to={`/inventory/${this.props.item.id}`}>
              <h2>{item.name}</h2>
            </Link>
            <h4>{item.description}</h4>
          </div>
          <h5 className="tableHeader">LAST ORDERED</h5>
          <h4 className="tableCell"> {lastOrdered}</h4>
          <h5 className="tableHeader">LOCATION</h5>
          <h4 className="tableCell"> {location.city}, {location.country}</h4>
          <h5 className="tableHeader"> QUANTITY</h5>
          <h4 className="tableCell"> {quantity}</h4>
          <h5 className="tableHeader">STATUS</h5>
          <div className="tableCell" id="kebabCell">
            <h4>{status}</h4>
            <div className="fullSizeOnly">
              <KebabButton
                id={this.props.item.id}
                removeHandler={this.props.removeHandler}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
