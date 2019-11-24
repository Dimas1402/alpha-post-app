import React from "react";
import "../../../container/Admins/Sidebar";
import ContentAdmin from "../ContentAdmin/ContentAdmin";
import withSidebar from "../Sidebar/withSidebar";

const Admin = () => {
  return (
    <div className="container-fluid admin">
      <div className="row ">
        <ContentAdmin />
      </div>
    </div>
  );
};

export default withSidebar(Admin);
