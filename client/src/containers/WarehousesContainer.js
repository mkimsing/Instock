import React, { Component } from "react";
import axios from "axios";
import AllWarehouses from "../components/AllWarehouses";

class WarehousesContainer extends Component {
  state = {
    warehouses: {}
  };

  fetchAllWarehouses() {
    axios
      .get("http://localhost:8080/warehouses")
      .then(response => {
        this.setState({
          warehouses: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  postNewWarehouse = (name, location, contact, categories) => {
    const newWarehouse = {
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      name: name,
      location: location,
      contact: contact,
      categories: categories
    };
    axios
      .post("http://localhost:8080/warehouses", {
        ...newWarehouse
      })
      .then(response => {
        this.setState({
          warehouses: response.data
        });
      });
  };

  componentDidMount() {
    this.fetchAllWarehouses();
  }
  render() {
    return (
      <div>
        <AllWarehouses
          warehouses={this.state.warehouses}
          postNewWarehouse={this.postNewWarehouse}
        />
      </div>
    );
  }
}

export default WarehousesContainer;
