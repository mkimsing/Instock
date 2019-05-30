import React, { Component } from "react";
import axios from "axios";
import apiInfo from "../helpers/api_info";
import WarehouseInventory from "../components/WarehouseInventory";
export default class WarehouseInventoryContainer extends Component {
  state = {
    inventory: [],
    warehouseData: {}
  };
  componentDidUpdate(prevProps) {
    if (this.props.match.params === prevProps.match.params) {
      let { warehouseID } = this.props.match.params;
      axios
        .get(`${apiInfo.API_URL}/warehouses/${warehouseID}/inventory`)
        .then(response => {
          this.setState({
            inventory: response.data
          });
        });
    }
  }

  componentDidMount() {
    let { warehouseID } = this.props.match.params;
    axios
      .get(`${apiInfo.API_URL}/warehouses/${warehouseID}/inventory`)
      .then(response => {
        this.setState({
          inventory: response.data
        });
      });

    axios.get(`${apiInfo.API_URL}/warehouses`).then(response => {
      let foundWarehouse = response.data.find(warehouse => {
        return warehouse.id === parseInt(warehouseID);
      });
      this.setState({
        warehouseData: foundWarehouse
      });
    });
  }

  removeHandler = id => {
    axios.delete(`http://localhost:8080/inventory/${id}`).then(response => {
      let { warehouseID } = this.props.match.params;
      axios
        .get(`${apiInfo.API_URL}/warehouses/${warehouseID}/inventory`)
        .then(response => {
          this.setState({
            inventory: response.data
          });
        });
    });
  };

  render() {
    return (
      <WarehouseInventory
        inventory={this.state.inventory}
        warehouseData={this.state.warehouseData}
        removeHandler={this.removeHandler}
      />
    );
  }
}
