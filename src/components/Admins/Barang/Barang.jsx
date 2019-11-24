import React from "react";
import "../../../styles/_Admin.scss";
import NavbarContainer from "../../../container/Admins/Navbar";
import SidebarContainer from "../../../container/Admins/Sidebar";
import withSidebar from "../Sidebar/withSidebar";
import "./_Barang.scss";

import TableTambahBarang from "../Barang/BarangMenu/TableTambahBarang/tableTambahBarang";
import Barang from "./BarangMenu/TambahBarang/TambahBarang";
import BarangDijual from "./BarangMenu/BarangDijual/BarangDijual";
import TableBarangDijual from "./BarangMenu/TableBarangDijual/TableBarangDijual";

const Admin = () => {
  return (
    
   <div>
      <div className="container-fluid">
        <NavbarContainer />
        <div className="row ">
          <SidebarContainer />
          <div
            id="main"
            className="col-md-10 col-sm-12 offset-2 content-admin "
          >
            <div className="row">
              <div className="col-md-12">
                <Barang />
                <div className="row">
                  <div className="col-md-12">
                    <TableTambahBarang />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <BarangDijual />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <TableBarangDijual />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default withSidebar(Admin);
