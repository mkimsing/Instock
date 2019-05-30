import React, { Component } from "react";
import Switch from "react-switch";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Select from "react-select";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    if (Object.keys(this.props.product).length === 0)
      return <div>Loading...</div>;

    const options = this.props.locations.map(location => {
      return { label: location, value: location };
    });

    return (
      <div className="product-detail-page--margin">
        <div className="header">
          <img src={BackArrow} />
          <h1>{this.props.product.item.name}</h1>
        </div>
        <div>
          <form className="form">
            <div className="form--flex form__description">
              ITEM DESCRIPTION
              <textarea rows="5">
                {this.props.product.item.description}
              </textarea>
            </div>
            <aside>
              <div className="form__row--flex">
                <div className="form--flex form__margin--right">
                  ORDERED BY
                  <input
                    type="text"
                    defaultValue={this.props.product.orderedBy}
                  />
                </div>
                <div className="form--flex">
                  REFERENCE NUMBER
                  <input type="text" defaultValue={this.props.product.id} />
                </div>
              </div>
              <div className="form__row--flex">
                <div className="form--flex form__margin--right">
                  LAST ORDERED
                  <input
                    type="text"
                    defaultValue={this.props.product.lastOrdered}
                  />
                </div>
                <div className="form--flex">
                  LOCATION
                  <Select
                    defaultOptions
                    options={options}
                    className="form__city"
                    classNamePrefix="form__city"
                    ç
                  />
                  {/* <select className="form__city">
                    <option value="Toronto">{`${this.props.location.city}, ${
                      this.props.location.country
                    }`}</option>
                    <option value="Vancouver">Vancouver, CA</option>
                    <option value="Calgary">Calgary, CA</option>
                  </select> */}
                </div>
              </div>
              <div className="form__row--flex">
                <div className="form--flex form__margin--right">
                  QUANTITY
                  <input
                    type="text"
                    defaultValue={this.props.product.quantity}
                  />
                </div>
                <div className="form--flex">
                  STATUS
                  <div className="form__stock">
                    <span className="form__stock-text">
                      {this.props.product.status}
                    </span>
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

              <div className="form--flex form__categories--margin">
                CATEGORIES
                <textarea id="categories" rows="6">
                  {this.props.product.categories}
                </textarea>
              </div>
            </aside>
          </form>
        </div>
        <div className="buttons">
          <button>SAVE</button>
          <div className="cancel-button">CANCEL</div>
        </div>
      </div>
    );
  }
}
