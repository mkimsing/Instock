import React from "react";
import "./styles/App.css";

import { Switch, Route } from "react-router-dom";
import WarehousesContainer from "./containers/WarehousesContainer";
import InventoryContainer from "./containers/InventoryContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {/* When a user hits the homepage, redirect them to the list of warehouses */}

          <Route path="/" exact component={WarehousesContainer} />
          <Route path="/warehouses" component={WarehousesContainer} />
          <Route path="/inventory" component={InventoryContainer} />
          {/* <Route path="/warehouse/:id" component={Warehouse} /> */}
          {/* <Route path="/inventory/:id" component={Inventory} /> */}
        </Switch>
      </div>
    );
  }

}

export default App;
