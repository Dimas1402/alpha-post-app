import React from "react";
import Moment from "react-moment";
import Clock from "../../Clock/Clock";


const Transaksi = () => {
  const date = new Date();
  return (
    <>
      <div className="col-md-8 box-content  ">
        <div className="row">
          <div className="box-sip">
            <h2>Jumlah Transaksi</h2>
            <h2 className="nilai-transaksi">0</h2>
          </div>
          <div className="list-stok">
            <ul className="list-group  list-barang-stock">
              <li className="list-group-item list-barang">Jumlah stock</li>
              <li className="list-group-item list-barang">Barang Terjual</li>
              <li className="list-group-item list-barang">Barang Terbeli</li>
            </ul>
          </div>
          <div className="list-stok">
            <ul className="list-group  list-barang-stock">
              <li className="list-group-item list-barang">12</li>
              <li className="list-group-item list-barang">10</li>
              <li className="list-group-item list-barang">3</li>
            </ul>
          </div>
          <div className="card ml-4  transaksi-card">
            <h5 className="tanggal-transaksi text-center mt-5">
              Tanggal <Moment format="L">{date}</Moment>{" "}
            </h5>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card card-date" style={{ width: "18rem" }}>
          <Moment className="mt-1 ml-3" format="MMMM Do YYYY">
            {date}
          </Moment>
          <div id="date-weather" className="card-body">
            <Clock/>
            <a href="https://www.booked.net/weather/bantul-155860">
              <img
                src="https://w.bookcdn.com/weather/picture/12_155860_1_1_20b2ab_118_2071c9_ffffff_ffffff_3_2071c9_ffffff_0_6.png?scode=124&domid=w209&anc_id=71337"
                alt="booked.net"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transaksi;
