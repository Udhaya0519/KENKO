import React from "react";
import logo from "../assets/images/logo.png";
import phone from "../assets/icons/phone_icon.svg";
import vector from "../assets/icons/search_icon.svg";
import key from "../assets/icons/key_icon.svg";
import eye from "../assets/icons/eye_icon.svg";
import profile from "../assets/icons/user_icon.svg";
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
             <div>
                <img src={profile} alt="profile" />
                <span>7638976389</span>
                <ul className="dropdown">
                     <li>7638976893</li>
                </ul>
                
             </div>

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
