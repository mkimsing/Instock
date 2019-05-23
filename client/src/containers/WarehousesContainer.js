import React, { Component } from "react";
import axios from "axios";
class WarehousesContainer extends Component {
  state = {
    warehouses: {}
  };
  componentDidMount() {
    axios.get("http://localhost:8080/warehouses").then(response => {
      console.log(response.data);
      this.setState({
        warehouses: response.data
      });
    });
  }
  render() {
    return <div>aksdjf</div>;
  }
}

export default WarehousesContainer;
