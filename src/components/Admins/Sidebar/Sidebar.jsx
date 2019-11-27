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
      <ul className="list-group div-img mt-3">
        <li className="list-group-item li-body">
          <table>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <img
                    src="https://us.123rf.com/450wm/triken/triken1608/triken160800028/61320729-stock-vector-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg?ver=6"
                    alt="..."
                    className="img-thumbnail img-admin mr-3"
                  />
                </td>
                <td>
                  <p className="admin-title">Bang Admin </p>

                  <p className="admin-circle">
                    <i id="icon-circle" className="fas fa-circle"></i> Admin
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>

      <ListContainer />
    </div>
  );
};

export default Sidebar;
