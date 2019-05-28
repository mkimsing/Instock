import React, { Component } from "react";
import axios from "axios";
import apiInfo from "../helpers/api_info";
import Inventory from "../components/Inventory";
export default class InventoryContainer extends Component {
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

  render() {
    return <Inventory inventory={this.state.inventory} warehouseNames={this.state.warehouseNames} />;
  }
}
