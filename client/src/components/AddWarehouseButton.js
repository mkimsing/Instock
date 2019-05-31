import React, { Component } from "react";
import Add from "../assets/Icons/SVG/Icon-add.svg";
import AddWarehouse from "./AddWarehouse";

export default class AddWarehouseButton extends Component {
  state = {
    addWarehouseDisplay: "addWarehouse--hide"
  };
  displayAddWarehouse = () => {
    this.setState({
      addWarehouseDisplay: "addWarehouse--show"
    });
  };
  hideAddWarehousePage = () => {
    this.setState({
      addWarehouseDisplay: "addWarehouse--hide"
    });
  };

  render() {
    return (
      <>
        <button
          className="warehousesPage__add"
          onClick={this.displayAddWarehouse}
        >
          <img className="warehousesPage__add--img" src={Add} alt='add symbol' />
        </button>
        <AddWarehouse
          hideAddWarehousePage={this.hideAddWarehousePage}
          addWarehouseDisplay={this.state}
          postNewWarehouse={this.props.postNewWarehouse}
        />
      </>
    );
  }
}
