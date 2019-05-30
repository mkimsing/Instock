import React from "react";
import "./styles/App.css";

import { Switch, Route } from "react-router-dom";
import WarehousesContainer from "./containers/WarehousesContainer";
import InventoryContainer from "./containers/InventoryContainer";
import WarehouseInventoryContainer from "./containers/WarehouseInventoryContainer";

import AddWarehouse from "./components/AddWarehouse"
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductContainer from "./containers/ProductContainer";

//Is this needed?
//import ProductDetailComponent from "./components/ProductDetailComponent";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>

          <Route path="/addWarehouse" exact component={AddWarehouse}/>
          <Route path="/addProduct" exact component={AddProduct}/>
          <Route path="/editProduct" exact component={EditProduct} />
          {/* When a user hits the homepage, redirect them to the list of warehouses */}

          <Route path="/" exact component={WarehousesContainer} />
          <Route path="/warehouses" exact component={WarehousesContainer} />
          <Route
            path="/warehouses/:warehouseID"
            exact
            component={WarehouseInventoryContainer}
          />

          <Route path="/inventory" exact component={InventoryContainer} />
          <Route path="/inventory/:id" component={ProductContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
