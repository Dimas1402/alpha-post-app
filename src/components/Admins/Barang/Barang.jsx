import React from "react";
import "../../../styles/_Admin.scss";
import NavbarContainer from "../../../container/Admins/Navbar";
import SidebarContainer from "../../../container/Admins/Sidebar";
import withSidebar from "../Sidebar/withSidebar";
import "./_Barang.scss";

// import TableTambahBarang from "../Barang/BarangMenu/TableTambahBarang/tableTambahBarang";
// import Barang from "./BarangMenu/TambahBarang/TambahBarang";
// import BarangDijual from "./BarangMenu/BarangDijual/BarangDijual";
// import TableBarangDijual from "./BarangMenu/TableBarangDijual/TableBarangDijual";
import TambahBarangContainer from "../../../container/Admins/Barang/TambahBarang"
import TableTambahBarangContainer from "../../../container/Admins/Barang/TableTambahBarangContainer";
import BarangJualContainer from "../../../container/Admins/Barang/BarangJualContainer";
import TableBarangDiJualContainer from "../../../container/Admins/Barang/TableBarangDiJual";

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
                <TambahBarangContainer/>
                <div className="row">
                  <div className="col-md-12">
                   <TableTambahBarangContainer/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                   <BarangJualContainer/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                   <TableBarangDiJualContainer/>
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
