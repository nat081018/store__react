import React from "react"
import "./form-input.style.scss"

const FromInput = ({hendleChange, label, ...otherInputProps}) => (
    <div className="group">
        <input className="form-input" onChange={hendleChange}  {...otherInputProps}/>
        {
           label ? (<lable className={` ${otherInputProps.value.length ? "shrink" : ""} form-input-label`}>{label}</lable>) : null
        }
    </div>
)

export default FromInput