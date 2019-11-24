import React from 'react'
import "./_TableBarangDijual.scss"

const TableBarangDijual = () => {
    return(
        <div className="table-tambah-barang">
        <table className="table mt-4 tambahBarang">
          <thead className="thead">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama Barang Di Jual</th>
              <th scope="col">Jumlah Barang Di Jual</th>
              <th scope="col">Harga Satuan</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Pensil</td>
              <td>5</td>
              <td>Rp.1000</td>
              <td>Rp.5000</td>
              <td>
                <i className="fas fa-trash-alt delete-table-tambah-barang"></i>{" "}
                <i className="fas fa-edit edit-table-tambah-barang"></i>
              </td>
            </tr>
          
            
          </tbody>
        </table>
        <p className="txt-barang-dijual">*Barang yang di jual akan masuk ke menu "Hasil Penjualan" </p>
      </div>
    )
}

export default TableBarangDijual