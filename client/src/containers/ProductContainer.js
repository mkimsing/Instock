import React, { Component } from "react";
import axios from "axios";
import apiInfo from "../helpers/api_info";
import EditProduct from "../components/EditProduct";
import ProductDetails from "../components/ProductDetailComponent";
import { Route } from "react-router-dom";
export default class ProductContainer extends Component {
  state = {
    product: {},
    warehouseLocations: []
  };

  saveHandler = product => {
    axios
      .put(`http://localhost:8080/inventory/${product.id}`, product)
      .then(response => {
        this.setState({
          inventory: response.data
        });
        this.props.history.push(`/inventory/${product.id}`)

      });
  };

  componentDidMount() {
    axios
      .get(`${apiInfo.API_URL}/inventory/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          product: response.data
        });
      });

    axios.get(`${apiInfo.API_URL}/warehouses`).then(response => {
      const locations = response.data.map(warehouse => {
        return warehouse.location.region;
      });

      const uniqueLocations = [...new Set(locations)];
      this.setState({
        warehouseLocations: uniqueLocations
      });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      axios
        .get(`${apiInfo.API_URL}/inventory/${this.props.match.params.id}`)
        .then(response => {
          this.setState({
            product: response.data
          });
        });
    }
  }

  render() {
    return (
      <>
        <Route
          path={`${this.props.match.path}`}
          exact
          render={() => {
            return <ProductDetails product={this.state.product} />;
          }}
        />

        <Route
          path={`${this.props.match.path}/edit`}
          exact
          render={() => {
            return (
              <EditProduct
                product={this.state.product}
                locations={this.state.warehouseLocations}
                saveHandler={this.saveHandler}
              />
            );
          }}
        />
      </>
    );
  }
}
