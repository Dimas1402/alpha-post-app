import React from "react";
import "./_ContentAdmin.scss"
import Transaksi from "./Content/jumlahTransaksi";
import { BtnHarianBulanan } from "../Button/Button";
import NavbarContainer from "../../../container/Admins/Navbar";
import DataTransaksi from "./Content/Isi/DataTransaksi";

import Grafik from "./Content/Isi/Chart";

const ContentAdmin = () => {
  return (
    <div id="main" className="col-md-10 col-sm-12 offset-2 content-admin ">
      <NavbarContainer />
      <div className="row ml-1">
        <Transaksi />
      </div>
      <div className="row ">
        <div className="col-md-12">
          <BtnHarianBulanan />
        </div>
        <div className="col-md-12 mt-2 d-flex flex-wrap  ">
        <DataTransaksi/>
        </div>
        <div style={{color:"black", overflowX:"auto"}} className="col-md-12 col-sm-12 mt-4 ">
          <Grafik/>
        </div>
      </div>
    </div>
  );
};

export default ContentAdmin;
