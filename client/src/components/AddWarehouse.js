import React, { Component } from "react";
import Switch from "react-switch";

export default class AddWarehouse extends Component {
  render() {
    return (
      <div className="addWarehouse">
        <h1>Add New</h1>
        <form>
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
              </select>
            </div>
          </div>
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
                placeholder="(000) 000 - 0000"
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
            <button className="cancel-button">CANCEL</button>
          </div>
        </form>
      </div>
    );
  }
}
