import React from "react";
import withSidebar from "../Sidebar/withSidebar";
import ContentHasilPenjualan from "./HasilPenjulanMenu/ContentHasilPenjualan";

const HasilPenjualan = () => {
  return (
    <div className="container-fluid admin">
      <div className="row ">
      <ContentHasilPenjualan/>
      </div>
    </div>
  );
};

export default withSidebar(HasilPenjualan);
