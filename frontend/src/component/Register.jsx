import React from "react";
import logo from "../assets/images/logo.png";
import phone from "../assets/images/phone.svg";
import vector from "../assets/images/Vector.svg";
import key from "../assets/images/key.svg";
import eye from "../assets/images/eye.svg";
import profile from "../assets/images/profile.svg";
import "../css/Register.css";

const Register = () => {
  return (
    <section className="register">
      <div className="container">
        <div className="register-wrapper">
          <div className="logoalign">
            <img src={logo} alt="" />
          </div>
          <form className="toregister">
            <label>Mobile Number</label>
            <div className="inputbox">
              <img src={phone} alt="" />
              <span>+91</span>
              <input type="number" required />
              <img src={vector} alt="" />
            </div>
            <label>OTP</label>
            <div className="inputbox">
              <img src={key} alt="" />
              <input type="password" required />
              <img src={eye} alt="" />
            </div>
            <label>UHID</label>
            <input type="text" />
            <button type="submit" className="btnsubmit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
