import React, { Component } from "react";
import "./App.css";
import {Route, Switch, Redirect}  from "react-router-dom"
import {connect} from "react-redux"


import Header from "./components/header/Header.component"
import Homepage from "./pages/homepage/homepage.component"
// import Contact from "./components/contact/contact.component"
import ShopPage from "./pages/shop/shopPage.component"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import CheckoutPage from "./pages/checkout-page/checkout.component"
import {auth, creacteUserProfileDocument,  addCollectionToTheFireStore} from "./firebase/firebase.utils"

import {selectUser} from "./redux/user/user.selectors"

import {setCurrentUser} from "./redux/user/user.actions"
import { selectCollectionFromPreview } from "./redux/shop/shop.selector"

class App extends Component {
   
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser, collectionArrey} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( 
      async (userAuth) => {

      if(userAuth){
        const userRef =   
        await creacteUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })

        })
      }

      setCurrentUser(userAuth)
      addCollectionToTheFireStore( "newCollection", collectionArrey.map(({title, items}) => ({title, items})))
      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return(
      <div className="main__wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/shop" component={ShopPage}/>
          <Route exact path="/checkout" component={CheckoutPage}/>
          {/* <Route path="/contact" component={Contact} /> */}
          <Route exact path="/signin" render={() => 
            this.props.currentUser ? 
            (< Redirect to="/"/>) : 
            (< SignInAndSignUpPage/>)
            }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectUser(state),
  collectionArrey: selectCollectionFromPreview(state)
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App)