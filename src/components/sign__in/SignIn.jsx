import React, { Component } from "react";
import "./sign__in.scss";
import FormInput from "../form__input/FormInput.jsx";
import CustomButton from "../custom__button/CustomButton.jsx";
import { signInWithGoogle } from "../../firebase/firebase.utilit.js";
import {
  auth,
  createUserProfileDocument,
} from "../../firebase/firebase.utilit.js";

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }
  handelSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handelChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sing-in__wrapper">
        <h2>I already have an accout </h2>
        <span>Sing in with your email and password</span>
        <form onSubmit={this.handelSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            onChange={this.handelChange}
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            required
            label="password"
            onChange={this.handelChange}
          />
          <div className="form__buttons">
            <CustomButton type="submit">SING IN</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
