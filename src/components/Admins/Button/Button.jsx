import React from "react";
import "./Button.scss";
import { NavLink } from "react-router-dom";

export const BtnHarianBulanan = () => {
  return (
    <div className="col">
      <div className="row">
        <div className="btn-hr-bln">
          <NavLink activeClassName="btn-active-bln" exact to="/admin/dashboard/harian">
            <button type="button" className="btn btn-outline-light btn-harian">
              Harian
            </button>
          </NavLink>
          <NavLink activeClassName="btn-active-bln" to="/admin/dashboard/bulanan">
            <button type="button" className="btn btn-outline-light btn-harian">
              Bulanan
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
