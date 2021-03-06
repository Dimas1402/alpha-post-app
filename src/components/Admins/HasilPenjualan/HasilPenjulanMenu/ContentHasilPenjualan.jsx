import React from 'react'
import NavbarContainer from '../../../../container/Admins/Navbar'
import './_ContentHasilPenjualan.scss'
import ModalHasilPenjualan from './Modal'
import LaporanHasilPenjualan from './LaporanHasilPenjualan'

const ContentHasilPenjualan = ({ dataBarang }) => {
  return (
    <div id='main' className='col-md-10 col-sm-12 offset-2 content-admin '>
      <NavbarContainer />
      <div className='row'>
        <div className='col-md-12 '>
          <div className='bg-hasil-penjualan mt-4'>
            <p className='title-hasil-penjualan text-center'>
              {' '}
              Laporan Hasil Penjualan
            </p>
          </div>
        </div>
        <div className='col-md-12 mt-2'>
          <div className='table-tambah-barang'>
            <table className='table mt-4 tambahBarang'>
              <thead className='thead'>
                <tr>
                  <th scope='col'>#</th>
                  <th scope='col'>Nama Barang</th>
                  <th scope='col'>Stock</th>
                  <th scope='col'>Harga Satuan</th>
                  <th scope='col'>Hasil penjualan</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {dataBarang.length === 0 ? (
                  <tr>
                    <td scope='row'></td>
                    <td>
                      <h5>kosong</h5>
                    </td>
                    <td>
                      <h5>kosong</h5>
                    </td>
                    <td>
                      <h5>kosong</h5>
                    </td>
                    <td>
                      <i
                        style={{ cursor: 'pointer' }}
                        className='fas fa-sort-amount-up-alt icon-penjualan ml-5'
                        data-toggle='modal'
                        data-target='.bd-example-modal-lg'
                      ></i>
                      <ModalHasilPenjualan />
                    </td>
                  </tr>
                ) : (
                  <>
                    {dataBarang.map((res, index) => (
                      <tr key={res._id}>
                        <td scope='row'>{index + 1}</td>
                        <td>{res.nama_barang_jual}</td>
                        <td>{res.jumlah_barang}</td>
                        <td>{res.harga_satuan}</td>
                        <td>
                          <i
                            style={{ cursor: 'pointer' }}
                            className='fas fa-sort-amount-up-alt icon-penjualan ml-5 '
                            data-toggle='modal'
                            data-target='.bd-example-modal-lg'
                          ></i>
                          <ModalHasilPenjualan />
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className='col-md-12 mt-5'>
          <LaporanHasilPenjualan />
        </div>
      </div>
    </div>
  )
}

export default ContentHasilPenjualan
