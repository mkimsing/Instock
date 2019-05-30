import React from "react";
import "./styles/App.css";

import { Switch, Route } from "react-router-dom";
import WarehousesContainer from "./containers/WarehousesContainer";
import InventoryContainer from "./containers/InventoryContainer";
import WarehouseInventoryContainer from "./containers/WarehouseInventoryContainer";

import AddWarehouse from "./components/AddWarehouse"
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

import ProductDetailComponent from "./components/ProductDetailComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ProductDetailComponent />
        <Switch>

          <Route path="/addWarehouse" exact component={AddWarehouse}/>
          <Route path="/addProduct" exact component={AddProduct}/>
          <Route path="/editProduct" exact component={EditProduct} />
          {/* When a user hits the homepage, redirect them to the list of warehouses */}

          <Route path="/" exact component={WarehousesContainer} />
          <Route path="/warehouses" exact component={WarehousesContainer} />
          <Route path="/warehouses/:warehouseID" exact component={WarehouseInventoryContainer} />

          <Route path="/inventory" component={InventoryContainer} />
          {/* <Route path="/warehouse/:id" component={Warehouse} /> */}
          {/* <Route path="/inventory/:id" component={Inventory} /> */}
        </Switch>

      </div>
    );
  }
}

export default App;
