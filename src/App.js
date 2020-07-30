import React, { Component } from "react";
import "./App.css";
import {Route, Switch}  from "react-router-dom"


import Header from "./components/header/Header.component"
import Homepage from "./pages/homepage/homepage.component"
import Contact from "./components/contact/contact.component"
import ShopPage from "./pages/shop/shopPage.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import {auth} from "./firebase/firebase.utils"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser : null
    }
  }

  
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return(
      <div className="main__wrapper">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/shop" component={ShopPage}/>
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

export default App