import React from "react";
import withSidebar from "../Sidebar/withSidebar";
import ContentKasir from "./ContentKasir/ContentKasir";
import NavbarContainer from "../../../container/Admins/Navbar"


const Kasir = () => {
  return (
    <div className="container-fluid admin">
      <NavbarContainer/>
      <div className="row ">
        <ContentKasir/>
      </div>
    </div>
  );
};

export default withSidebar(Kasir);