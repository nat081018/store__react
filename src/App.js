import React, { Component } from "react";
import "./App.css";
import {Route, Switch}  from "react-router-dom"


import Header from "./components/header/Header.component"
import Homepage from "./pages/homepage/homepage.component"
import Contact from "./components/contact/contact.component"
import ShopPage from "./pages/shop/shopPage.component"



class App extends Component {

  render() {
    return(
      <div className="main__wrapper">
        <Header/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/shop" component={ShopPage}/>
          <Route pash="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App