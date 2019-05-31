import React, { Component } from "react";
import Switch from "react-switch";
import BackArrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Select from "react-select";
import { Link } from "react-router-dom";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedProduct: this.props.product,
      checked: this.props.product.status === "In Stock" ? true : false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  /**
   *
   * handle change of all fields in edit product page and set state on editedProduct
   */
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    let temp = this.state.editedProduct;
    if (name === "description" || name === "name" || name === "productId") {
      temp.item[name] = value;
    } else {
      temp[name] = value;
    }
    this.setState({
      editedProduct: temp
    });
    console.log(temp);
  };

  handleSelectChange = option => {
    const value = option.value;
    let strings = value.split(",");
    let temp = this.state.editedProduct;
    temp.location = {};
    temp.location.city = strings[0];
    temp.location.country = strings[1];
    this.setState({
      editedProduct: temp
    });
    console.log(temp);
  };

  handleSwitchChange = checked => {
    this.setState({
      checked: checked
    });
    let temp = this.state.editedProduct;
    if (checked === false) {
      var toggleLabel = "Out Of Stock";
    } else {
      var toggleLabel = "In Stock";
    }
    temp.status = toggleLabel;
    this.setState({
      editedProduct: temp
    });
    console.log(temp);
  };

  render() {
    if (Object.keys(this.props.product).length === 0)
      return <div>Loading...</div>;

    const options = this.props.locations.map(location => {
      return { label: location, value: location };
    });

    if (this.state.checked === false) {
      var toggleLabel = "Out Of Stock";
    } else {
      var toggleLabel = "In Stock";
    }

    return (
      <div className="product-detail-page--margin">
        <div className="header">
          <Link to={`/inventory/${this.props.product.id}`}>
            <img src={BackArrow} />
          </Link>
          <h1>{this.props.product.item.name}</h1>
        </div>
        <div>
          <form className="form" onChange={this.handleChange}>
            <div className="form--flex form__description">
              ITEM DESCRIPTION
              <textarea rows="5" name="description">
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
                    name="orderedBy"
                  />
                </div>
                <div className="form--flex">
                  REFERENCE NUMBER
                  <input
                    type="text"
                    defaultValue={this.props.product.id}
                    name="productId"
                  />
                </div>
              </div>
              <div className="form__row--flex">
                <div className="form--flex form__margin--right">
                  LAST ORDERED
                  <input
                    type="text"
                    defaultValue={this.props.product.lastOrdered}
                    name="lastOrdered"
                  />
                </div>
                <div className="form--flex">
                  LOCATION
                  <Select
                    defaultOptions
                    options={options}
                    className="form__city"
                    classNamePrefix="form__city"
                    name="location"
                    onChange={this.handleSelectChange}
                  />
                </div>
              </div>
              <div className="form__row--flex">
                <div className="form--flex form__margin--right">
                  QUANTITY
                  <input
                    type="text"
                    defaultValue={this.props.product.quantity}
                    name="quantity"
                  />
                </div>
                <div className="form--flex">
                  STATUS
                  <div className="form__stock">
                    <span className="form__stock-text">{toggleLabel}</span>
                    <label className="form__toggle-button">
                      <Switch
                        onChange={this.handleSwitchChange}
                        checked={this.state.checked}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        height={22}
                        width={40}
                        onColor="#79ad3b"
                        handleDiameter={22}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="form--flex form__categories--margin">
                CATEGORIES
                <textarea id="categories" rows="6" name="categories">
                  {this.props.product.categories}
                </textarea>
              </div>
            </aside>
          </form>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              this.props.saveHandler(this.state.editedProduct);
            }}
          >
            SAVE
          </button>
          <Link to={`/inventory/${this.props.product.id}`}>
            <div className="cancel-button">CANCEL</div>
          </Link>
        </div>
      </div>
    );
  }
}
