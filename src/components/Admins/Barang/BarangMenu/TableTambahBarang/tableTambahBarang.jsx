import React from "react";
import "./_tableTambahBarang.scss";

const TableTambahBarang = () => {
  return (
    <div className="table-tambah-barang">
      <table className="table mt-4 tambahBarang">
        <thead className="thead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Barang</th>
            <th scope="col">Jumlah Barang</th>
            <th scope="col">Harga Satuan</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Pensil</td>
            <td>15</td>
            <td>Rp.1000</td>
            <td>Rp.15.000</td>
            <td>
              <i className="fas fa-trash-alt delete-table-tambah-barang"></i>{" "}
              <i className="fas fa-edit edit-table-tambah-barang"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Pulpen</td>
            <td>5</td>
            <td>Rp.3000</td>
            <td>Rp.15.000</td>
            <td>
              <i className="fas fa-trash-alt delete-table-tambah-barang"></i>{" "}
              <i className="fas fa-edit edit-table-tambah-barang"></i>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Buku</td>
            <td>10</td>
            <td>Rp.2000</td>
            <td>Rp.20.000</td>
            <td>
              <i className="fas fa-trash-alt delete-table-tambah-barang"></i>{" "}
              <i className="fas fa-edit edit-table-tambah-barang"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableTambahBarang;
