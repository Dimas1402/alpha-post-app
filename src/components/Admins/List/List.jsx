import React from "react";
import Lists from "../../../Data/List.json";
import { NavLink } from "react-router-dom";
import "./List.scss";

const List = props => {
  return (
    <div id="list-box" className="list-group">
      {Lists.List.map(data => (
        <NavLink key={data.id} activeClassName="list-active" to={data.path}>
          <p
            onClick={props.showSidebar}
            key={data.id}
            id="list"
            className="list-group-item list-group-item-action "
          >
            <i className={data.icon}></i> {data.name}{" "}
          </p>
        </NavLink>
      ))}
    </div>
  );
};

export default List;
