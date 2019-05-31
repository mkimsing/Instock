import React, { Component } from "react";
import helper from "../helpers/helper";
export default class AddWarehouse extends Component {
  submitHandler = event => {
    event.preventDefault();
    let {
      warehouse,
      address,
      address2,
      postalCode,
      city,
      contact, //Name
      position,
      phone,
      email,
      categories
    } = event.target;
    let fields = [
      warehouse,
      address,
      address2,
      postalCode,
      city,
      contact, //Name
      position,
      phone,
      email,
      categories
    ];
    let allFilled = fields
      .map(field => {
        return helper.isEmpty(field);
      })
      .every(val => {
        return val === false;
      });

    if (allFilled) {
      // Parse postal code to remove spaces between parts
      const parsedPostalCode = postalCode.value.replace(/\s+/g, "").trim();

      const locationObj = {
        address1: address.value.trim(),
        address2: address2.value.trim(),
        region: city.value.trim(),
        postalCode: `${parsedPostalCode} CA`
      };

      const contactObj = {
        name: contact.value.trim(),
        position: position.value.trim(),
        phone: phone.value.trim(),
        email: email.value.trim()
      };

      const categoriesArr = categories.value.split(",").map(category => {
        return category.trim();
      });
      this.props.postNewWarehouse(
        warehouse.value,
        locationObj,
        contactObj,
        categoriesArr
      );

      //Reset fields
      fields.forEach(field => (field.value = ""));

      //Hide modal
      this.props.hideAddWarehousePage();
    } else {
      alert('Please fill out all the fields!')
    }
  };
  render() {
    return (
      <div
        className={`addWarehouse ${
          this.props.addWarehouseDisplay.addWarehouseDisplay
          }`}
      >
        <div className="addWarehouse__tablet">
          <h1>Add New</h1>
          <form onSubmit={this.submitHandler}>
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
                  <option value="Vancouver, BC">Vancouver, BC</option>
                  <option value="Toronto, ON">Toronto, ON</option>
                  <option value="Calgary, AB">Calgary, AB</option>
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
                  placeholder="Additional address information"
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
                  placeholder="000-000-0000"
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
                name="categories"
              />
            </div>
            <div className="addWarehouse__buttons">
              <button>SAVE</button>
              <button
                type="button"
                onClick={this.props.hideAddWarehousePage}
                className="cancel-button"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
