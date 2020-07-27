import React, { Component } from "react";
import "./App.css";
import {Route, Switch}  from "react-router-dom"

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shopPage.component"

const HatsPage = () => (
  <div>HatsPage</div>
)

class App extends Component {

  render() {
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/shop" component={ShopPage}/>
        </Switch>
      </div>
    )
  }
}

export default App