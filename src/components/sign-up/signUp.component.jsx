import React, {Component} from "react";
import "./signUp.style.scss";

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import {auth, creacteUserProfileDocument  } from "../../firebase/firebase.utils";


class SignUp extends Component {
    constructor() {
        super()

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {  
            displayName,
            email,
            password,
            confirmPassword} = this.state

            if(password !== confirmPassword) {
                alert("password don't match")
                return
            }

            try{

                const {user} = 
                await auth.createUserWithEmailAndPassword(
                    email, 
                    password
                    )

                 await creacteUserProfileDocument(
                     user, 
                     {displayName}
                     )

                 this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                 })

            }catch(error){console.log(error)}

    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const { 
            displayName, 
            email,
            password,
            confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput
                type="text"
                 name="displayName"
                 label="display name"
                 value={displayName}
                 onChange={this.handleChange}
                 required
                />
                <FormInput
                name="email"
                type="email"
                label="email"
                onChange={this.handleChange}
                value={email}
                required
                />
                
                <FormInput
                 name='password'
                 type='password'
                 value={password}
                 onChange={this.handleChange}
                 label='password'
                 required/>
                <FormInput
                name='confirmPassword'
                type='password'
                value={confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required
                />
                <CustomButton type="submit">sign up</CustomButton>
                
                </form>
            </div>
        )
    }
}

export default  SignUp