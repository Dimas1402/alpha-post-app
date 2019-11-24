import React from "react";
import "./Navbar.scss";
import Logo from "../../../../../Assets/logo3.svg";

const Navbar = (props) => {
  return (
    <>
      <nav  className="navbar navbar-expand-lg fixed-top">
        <img src={Logo} alt="" />
        <i onClick={() => props.showSidebar()} id="icon-down" className="fas fa-th-list "></i>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav"></div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
