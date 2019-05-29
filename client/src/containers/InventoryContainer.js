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

  // postNewItem(name, location, categories, status, last_ordered, ordered_by, warehouse_id, quantity) {
  //   console.log(this.props)
  //   const newItem = {
  //     id: Math.random().toString(36).substr(2, 9),
  //     // 
  //     name: name,
  //     location: location,
  //     contact: contact,
  //     categories: categories
  //   };
  //   axios
  //     .post("http://localhost:8080/inventory", {
  //       newItem
  //     })
  //     .then(response => {
  //       this.setState({
  //         inventory: response.data
  //       });
  //     });
  // }

  render() {
    return <Inventory inventory={this.state.inventory} warehouseNames={this.state.warehouseNames} />;
  }
}
