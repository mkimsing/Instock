import React, { Component } from "react";
import axios from "axios";

export default class AddWarehouse extends Component {
  constructor(props) {
    super(props);
  }

  addWarehouse = event => {
    event.preventDefault();
  };
  render() {
    console.log(this.props);
    return (
      <div
        className={`addWarehouse ${
          this.props.addWarehouseDisplay.addWarehouseDisplay
        }`}
      >
        <div className="addWarehouse__tablet">
        
          <h1>Add New</h1>
          <form onSubmit={this.addWarehouse}>
            <>
              <div className="addWarehouse__header">Warehouse</div>
              <input
                className="addWarehouse__input"
                type="text"
                name="warehouse"
                placeholder="Name"
              />
            </>
            <div className="addWarehouse__address-location">
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Address</div>
                <input
                  className="addWarehouse__input"
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                />
              </div>
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Location</div>
                <select
                  className="addWarehouse__input addWarehouse__input--select"
                  name="city"
                >
                  <option value="Vancouver">Vancouver, BC</option>
                  <option value="Toronto">Toronto, ON</option>
                  <option value="Calgary">Calgary, AB</option>
                </select>
              </div>
            </div>
            <div className="addWarehouse__address-location2">
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Address 2</div>
                <input
                  className="addWarehouse__input"
                  type="text"
                  name="address2"
                  placeholder="Enter additional Address information"
                />
              </div>
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Postal Code</div>
                <input
                  className="addWarehouse__input"
                  type="text"
                  name="postalCode"
                  placeholder="H0H 0H0"
                />
              </div>
            </div>{" "}
            <div className="addWarehouse__contact-position">
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Contact Name</div>
                <input
                  className="addWarehouse__input"
                  type="text"
                  name="contact"
                  placeholder="Enter Name"
                />
              </div>
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Position</div>
                <input
                  className="addWarehouse__input"
                  type="text"
                  name="position"
                  placeholder="Enter Position"
                />
              </div>
            </div>
            <div className="addWarehouse__contact-info">
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Phone Number</div>
                <input
                  className="addWarehouse__input"
                  type="text"
                  name="phone"
                  placeholder="000 - 000 - 0000"
                />
              </div>
              <div className="addWarehouse__stack">
                <div className="addWarehouse__header">Email</div>
                <input
                  className="addWarehouse__input"
                  type="text"
                  name="email"
                  placeholder="email@instock.com"
                />
              </div>
            </div>
            <div className="addWarehouse__categories">
              <div className="addWarehouse__header">Categories</div>
              <textarea
                className="addWarehouse__input addWarehouse__input--description"
                placeholder="Use commas to separate each category"
              />
            </div>
            <div className="addWarehouse__buttons">
              <button>SAVE</button>
              <button onClick={this.props.hideAddWarehousePage} className="cancel-button">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
