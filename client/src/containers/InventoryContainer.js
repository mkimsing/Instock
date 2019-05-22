import React, { Component } from "react";
import axios from "axios";
import apiInfo from "../helpers/api_info";
import InventoryList from "../components/InventoryList";
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
  render() {
    return <InventoryList />;
  }
}
