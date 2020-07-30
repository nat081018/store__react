import React, {Component} from "react"
import "./sign-in.style.scss"
import FromInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"
import signInWithGoogle from "../../firebase/firebase.utils"

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    } 

    hendeleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: "",
            password: ""
        })
    }

    hendleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="sign-in"> 
                <h1>I'm already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.hendeleSubmit}>
                    <FromInput
                    name="email" 
                    type="email" 
                    label="email"
                    value={this.state.email} 
                    hendleChange={this.hendleChange}
                    required />
                    <FromInput
                    name="password" 
                    type="password" 
                    value={this.state.email} 
                    label="password"
                    hendleChange={this.hendleChange}
                    required />
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>sign In With Google</CustomButton>  
                </form>
            </div>
        )
    }
}

export default SignIn 