import React, {Component} from "react"
import "./sign-in.style.scss"


class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    } 

    hendeleSubmit = (event) => {
        event.preventDefault()

        this.setState({
            email: "",
            password: ""
        })
    }

    hendleChange = (event) => {
        const {name, value} = event.target

        this.setState =({
            [name]: value
        })
    }

    render() {
        return (
            <div> 
                <h1>I'm already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.hendeleSubmit}>
                    <input name="email" 
                    type="email" 
                    value={this.state.email} 
                    onChange={this.hendleChange}
                    required/>
                    <label>Email</label>
                    <input 
                    name="password" 
                    type="password" 
                    value={this.state.email} 
                    onChange={this.hendleChange}
                    required/>
                    <label>Password</label>

                    < input type="submit" value="Submit form"/>
                </form>






            </div>
        )
    }
}

export default SignIn 