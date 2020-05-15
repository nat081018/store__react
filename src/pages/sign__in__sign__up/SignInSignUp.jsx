import React from "react";
import "./sign__in__sign__up.scss";
import SignIn from "../../components/sign__in/SignIn.jsx";
import SignUp from "../../components/sign__up/SignUp.jsx";

const SignInSignUp = () => (
  <div className="sign__in__and__sign__up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInSignUp;
