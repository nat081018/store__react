import React from "react";
import "./contact.scss";
import {ReactComponent as Logo}  from "../../assets/crown.svg" 



const Contact = () => (
    <div className="contact__wrapper">
        <h1>Contact</h1>
        <a href="tel:+1 213-485-2121">Phone: +1 213-485-2121</a>
        <p>Address: Spring Street <br/>
Los Angeles CA 90012 <br/>
United States</p>
        <Logo className="contact__logo"/>
    </div>
)

export default Contact