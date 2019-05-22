import React, { Component } from "react";
import Switch from "react-switch";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";

export default class InventoryDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="product-detail-page--margin">
        <div className="header">
          <img src={BackArrow} />
          <h1>Product Name</h1>
        </div>
        <form className="form">
          <div className="form--flex">
            ITEM DESCRIPTION
            <textarea
              rows="8"
              placeholder="Here is a more detailed summary of the product name, it’s uses,
          industries and possible attributes that could be used to describe the
          product."
            />
          </div>
          <div>
            <div className="form__row--flex">
              <div className="form--flex">
                ORDERED BY
                <input type="text" placeholder="Mark Saunders" />
              </div>
              <div className="form--flex">
                REFERENCE NUMBER
                <input type="text" placeholder="JK2020FD7811201" />
              </div>
            </div>
            <div className="form__row--flex">
              <div className="form--flex">
                LAST ORDERED
                <input type="text" placeholder="2018-05-24" />
              </div>
              <div className="form--flex">
                LOCATION
                <select className="form__city">
                  <option value="Toronto">Toronto, CA</option>
                  <option value="Vancouver">Vancouver, CA</option>
                  <option value="Calgary">Calgary, CA</option>
                </select>
              </div>
            </div>
            <div className="form__row--flex">
              <div className="form--flex">
                QUANTITY
                <input type="text" placeholder="0" />
              </div>
              <div>
                STATUS
                <div className="form__stock">
                  <div className="form__stock-text">In Stock</div>
                  <label className="form__toggle-button">
                    <Switch
                      onChange={this.handleChange}
                      checked={this.state.checked}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      height={22}
                      width={40}
                      onColor="#49C342"
                      handleDiameter={22}
                      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form--flex">
            CATEGORIES
            <textarea
              rows="6"
              placeholder="Industrial, Automotive, Heavy,
            Mechanical, Engineering,
            Transportation, Sales"
            />
          </div>
        </form>
        <button>SAVE</button>
        <div className="cancel-button">CANCEL</div>
      </div>
    );
  }
}