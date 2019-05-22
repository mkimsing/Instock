import React from "react";
import "./styles/App.css";
import {Switch, Route} from "react-router-dom"

class App extends React.Component {
render () {

  return (
    <div className="App">
      <Switch>
        {/* When a user hits the homepage, redirect them to the list of warehouses */}
        <Route path="/" exact component={Warehouses} />
        <Route path="/warehouses" component={Warehouses} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/warehouse/:id" component={Warehouse} />
        <Route path="/inventory/:id" component={Inventory} />
      </Switch>
    </div>
  );
}
}

export default App;
