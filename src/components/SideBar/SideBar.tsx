import React from "react";
import "./SideBar.css";
import Logo from "../../images/images.png";
import Button_icon from "../../images/customers icon/customers icon.png";
import Customer from "../../images/customers/customers.png"

const SideBar = () => {
  return (
    <>
    <div className="Side-bar">
      <div className="content">
        <img src={Logo} alt="" className="Logo" />
        <button className="Side_button">
          <img src={Button_icon} alt="" className="Button_icon" />
          <img src={Customer} alt="" />
        </button>
      </div>
    </div>
    </>
  );
};

export default SideBar;
