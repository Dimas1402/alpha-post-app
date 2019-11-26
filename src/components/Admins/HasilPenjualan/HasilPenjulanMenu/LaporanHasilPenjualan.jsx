import React from "react";
import "./_LaporanHasilPenjualan.scss";

const LaporanHasilPenjualan = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-header header-LHP">Barang Terjual</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Nama Barang</th>
                    <th scope="col">Jumlah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pensil</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </blockquote>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header header-LHP">Keuntungan</div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <table className="table">
                <thead>
                  <tr>
                    <th>TOTAL</th>
                    <td>Rp. -9.000</td>
                  </tr>
                </thead>
              </table>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanHasilPenjualan;
