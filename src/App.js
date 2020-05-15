import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home__page/HomePage.jsx";
import ShopPage from "./pages/shop__page/ShopPage.jsx";
import Header from "./components/header/Header.jsx";
import SignInSignUp from "./pages/sign__in__sign__up/SignInSignUp.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utilit.js";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/users/users.action.js";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

class App extends Component {
  constructor() {
    super();

    // this.state = {
    //   currentUser: null,
    // };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/singin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapSatateToProps = ({ user }) => ({ currentUser: user.currentUser });
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapSatateToProps, mapDispatchToProps)(App);
