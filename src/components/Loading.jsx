import React from "react";
import logo from "../assets/images/png/logo.png";

function Loding() {
  return (
    <div>
      <div className="min-vh-100 bg-black loding_position">
        <img
          className="w_xsm_50 w_sm_13 animation_loding"
          src={logo}
          alt="loading"
        />
      </div>
    </div>
  );
}

export default Loding;
