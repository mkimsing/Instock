import React, { Component } from "react";
import axios from "axios";
import apiInfo from "../helpers/api_info";
import Inventory from "../components/Inventory";

export default class InventoryContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    inventory: {},
    warehouseNames: {}
  };

  componentDidMount() {
    axios.get(`${apiInfo.API_URL}/inventory`).then(response => {
      this.setState({
        inventory: response.data
      });
    });
    axios.get("http://localhost:8080/warehouses").then(response => {
      this.setState({
        warehouseNames: response.data
      })
    })
  }

  postNewItem = (item, location, categories, lastOrdered, orderedBy, quantity, status, warehouseId) => {
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      item: item,
      location: location,
      categories: categories,
      lastOrdered: lastOrdered,
      orderedBy: orderedBy,
      quantity: quantity,
      status: status,
      warehouseId: warehouseId
    };
    console.log(newItem)
    axios
      .post("http://localhost:8080/inventory", {
        ...newItem
      })
      .then(response => {
        this.setState({
          inventory: response.data
        });
      });
  }
  removeHandler = id => {
    axios.delete(`http://localhost:8080/inventory/${id}`).then(response => {
      console.log(response.data.msg);
      this.setState({
        inventory: response.data.inventory
      });
    });
  };

  render() {
    return <Inventory
      inventory={this.state.inventory}
      warehouseNames={this.state.warehouseNames}
      postNewItem={this.postNewItem}
    />;
  }
}
