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
          <div class="modal-body modal-body-hasil-penjualan">
            <table class="table">
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
                  <td>5</td>
                </tr>
                <tr>
                  <td>Terjual</td>
                  <td>:</td>
                  <td>3</td>
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
