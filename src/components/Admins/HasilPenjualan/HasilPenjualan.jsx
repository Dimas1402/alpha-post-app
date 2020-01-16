import React from "react";
import withSidebar from "../Sidebar/withSidebar";
import ContentHasilPenjualanContainer from "../../../container/Admins/HasilPenjualan/ContentHasilPenjualanContainer";

const HasilPenjualan = () => {
  return (
    <div className="container-fluid admin">
      <div className="row ">
      <ContentHasilPenjualanContainer/>
      </div>
    </div>
  );
};

export default withSidebar(HasilPenjualan);
