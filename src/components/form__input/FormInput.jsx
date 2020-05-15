import React from "react";
import "./form__input.scss";

const FormInput = ({ handelChange, label, ...otherProps }) => (
  <div className="input__label-wrapper">
    <input className="input__label" onChange={handelChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form__input__label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
export default FormInput;
