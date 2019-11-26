import React from "react";
import "./Modal.scss";

const ModalHasilPenjualan = () => {
  return (
    <div
      className="modal fade bd-example-modal-lg modal-hasil-penjualan"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <p className="ml-3 mt-2 title-header">Hasil Penjualan</p>
          </div>
          <div className="modal-body modal-body-hasil-penjualan">
            <table className="table">
              <tbody>
                <tr>
                  <td>Nama Barang</td>
                  <td>:</td>
                  <td>Pensil</td>
                </tr>
                <tr>
                  <td>Harga Jual</td>
                  <td>:</td>
                  <td>Rp.1000</td>
                </tr>
                <tr>
                  <td>Stock</td>
                  <td>:</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Modal</td>
                  <td>:</td>
                  <td>Rp.12.000</td>
                </tr>
                <tr>
                  <td>Terjual</td>
                  <td>:</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>Uang yg di dapat</td>
                  <td>:</td>
                  <td>Rp.3.000</td>
                </tr>
                <tr>
                  <td>Keuntungan</td>
                  <td>:</td>
                  <td>Rp.-9.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalHasilPenjualan;
