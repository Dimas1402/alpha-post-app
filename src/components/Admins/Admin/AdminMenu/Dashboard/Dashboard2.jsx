import React from "react";
import ContentAdmin from "../../../ContentAdmin/ContentAdmin";
import withSidebar from "../../../Sidebar/withSidebar";


const Dashboard = () => {
  return (
    <div className="container-fluid admin">
      <div className="row ">
     <ContentAdmin/>
      </div>
    </div>
  );
};

export default withSidebar(Dashboard);