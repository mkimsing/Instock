import React, { Component } from "react";
import axios from "axios";
import apiInfo from "../helpers/api_info";
import Inventory from "../components/Inventory";

export default class InventoryContainer extends Component {
  state = {
    inventory: {}
  };

  componentDidMount() {
    axios.get(`${apiInfo.API_URL}/inventory`).then(response => {
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
    return (
      <Inventory
        inventory={this.state.inventory}
        removeHandler={this.removeHandler}
      />
    );
  }
}
