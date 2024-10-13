import React from "react";
import logo from "../assets/images/logo.png";
import "../css/Interface.css"


const Inerface = () => {
  return (
    <section className="front">
         <div>
              <div className="front-wrapper">
                  <img src={logo} alt="logo" />
                  <h3 className="tap" >Tap to begin</h3>     
              </div>
         </div>
    </section>
  );
};

export default Inerface;
