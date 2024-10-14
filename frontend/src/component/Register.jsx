import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import phone from "../assets/icons/phone_icon.svg";
import vector from "../assets/icons/search_icon.svg";
import key from "../assets/icons/key_icon.svg";
import eye from "../assets/icons/eye_icon.svg";
import profile from "../assets/icons/user_icon.svg";
import "../css/Register.css";
import dropdown from "../assets/icons/dropdown.svg";

const Register = () => {
  const uhidNumber = [2222111, 2344441, 2456666, 2456666];
  const [spanText, setspantext] = useState(12345555);
  const [isopen, setopen] = useState(false);
  const [showpass, hidepass] = useState(false);
  function handledropdown() {
    setopen(!isopen);
  }

  function handleText(el) {
    setspantext(el);
    setopen(!open);
  }

  function showPassword() {
    hidepass(!showpass);
  }

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
              <span style={{ fontSize: "15px",marginLeft:"8px" }}>+91</span>
              <input type="number" required style={{ fontSize: "15px" }} />
              <img src={vector} alt="" />
            </div>
            <label>OTP</label>
            <div className="inputbox">
              <img src={key} alt="" style={{margin:"5px"}} />
              <input type={showpass ? "text" : "password"} required />
              <img src={eye} alt="" onClick={showPassword} />
            </div>
            <label>UHID</label>
            <div className="testcase">
              <div className="uhidnumber">
                <div>
                  <img src={profile} alt="profile" />
                  <span>{spanText}</span>
                </div>

                <img
                  src={dropdown}
                  alt="dropdown"
                  onClick={handledropdown}
                  style={{
                    transform: isopen ? "rotate(-90deg)" : "rotate(0deg)",
                    cursor: "pointer",
                  }}
                />
              </div>
              <ul
                className="dropdown"
                style={{ display: isopen ? "block" : "none" }}
              >
                {uhidNumber.map((el, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      handleText(el);
                    }}
                  >
                    {el}
                  </li>
                ))}
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
