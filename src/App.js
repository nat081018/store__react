import React, { Component } from "react";
import "./App.css";
import {Route, Switch}  from "react-router-dom"


import Header from "./components/header/Header.component"
import Homepage from "./pages/homepage/homepage.component"
// import Contact from "./components/contact/contact.component"
import ShopPage from "./pages/shop/shopPage.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

import {auth, creacteUserProfileDocument} from "./firebase/firebase.utils"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser : null
    }
  }

  
  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged( 
      async (userAuth) => {

      if(userAuth){
        const userRef =   
        await creacteUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

        })
      }

      this.setState({
        currentUser: userAuth
      })
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const {currentUser} = this.state
    return(
      <div className="main__wrapper">
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/shop" component={ShopPage}/>
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    )
  }
}

export default App