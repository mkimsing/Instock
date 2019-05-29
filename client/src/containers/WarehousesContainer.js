import React, { Component } from "react";
import axios from "axios";
import AllWarehouses from '../components/AllWarehouses'

class WarehousesContainer extends Component {
    state = {
        warehouses: {}
    };
    componentDidMount() {
        axios.get("http://localhost:8080/warehouses").then(response => {
            this.setState({
                warehouses: response.data
            });
        });
    }


    render() {
        return (
            <div>
                <AllWarehouses warehouses={this.state.warehouses} />
            </div>
        )
    }
}

export default WarehousesContainer;
