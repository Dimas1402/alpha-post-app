import React from "react";
import "./_Sidebar.scss";
import logo from "../../../Assets/logo3.svg";
import ListContainer from "../../.././container/Admins/List";

const Sidebar = props => {
  return (
    <div
      id={props.stateShowSidebar ? "show" : "hidden"}
      className="col-md-2 col-sm-12 position-fixed  sidebar "
    >
      <i
        onClick={props.showSidebar}
        id="silang"
        className="fas fa-times silang"
      ></i>
      <img className="img-logo" src={logo} alt="" />
      <div className="div-img">
        <div className="row">
          <img
            src="https://us.123rf.com/450wm/triken/triken1608/triken160800028/61320729-stock-vector-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6"
            alt="..."
            className="img-thumbnail img-admin"
          ></img>
          <p>Bang Admin </p>
          <br></br>
          <p className="admin-p">
            <i id="icon-circle" className="fas fa-circle"></i> Admin
          </p>
        </div>
      </div>

      <ListContainer />
    </div>
  );
};

export default Sidebar;
