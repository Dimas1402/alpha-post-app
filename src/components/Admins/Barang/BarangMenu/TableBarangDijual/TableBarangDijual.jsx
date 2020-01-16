import React from 'react'
import './_TableBarangDijual.scss'

const TableBarangDijual = ({
  dataJualBarang,
  dataBarang,
  deleteBarangJual,
  deleteBarang,
  updateBarangJual,
  stateNamaBarang,
  stateJumlahBarang,
  stateHargaSatuan,
  onChange,
  editDataJualBarang,
  deleteJualbarang,
  alert
}) => {
  return (
    <div className='table-tambah-barang'>
      <table className='table mt-4 tambahBarang'>
        <thead className='thead'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nama Barang Di Jual</th>
            <th scope='col'>Jumlah Barang Di Jual</th>
            <th scope='col'>Harga Satuan</th>
            <th scope='col'>Total</th>
            <th scope='col'></th>
          </tr>
        </thead>
        
          {dataJualBarang.length === 0 ?  <tr>
              <th scope='row'></th>
              <td> <h5>Kosong</h5></td>
              <td> <h5>Kosong</h5></td>
              <td> <h5>Kosong</h5></td>
              <td> <h5>Kosong</h5></td>
              <td>
              </td>
            </tr>: 
             <tbody>
                  {dataJualBarang.map((res, index) => (
                    <tr key={res.index}>
                      <th scope='row'>{index + 1}</th>
                      <td>{res.nama_barang_jual}</td>
                      <td>{res.jumlah_barang}</td>
                      <td>{res.harga_satuan}</td>
                      <td>{res.total}</td>
                      <td>
                        <i
                          onClick={() => deleteBarangJual(res)}
                          data-toggle='modal'
                          data-target='#deleteBarang'
                          className='fas fa-trash-alt delete-table-tambah-barang'
                        ></i>{' '}
                        <i
                          onClick={() => updateBarangJual(res, index)}
                          data-toggle='modal'
                          data-target='#updateBarang'
                          className='fas fa-edit edit-table-tambah-barang'
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
            }
     
        
      </table>
      {/* modal */}
      <div
        className='modal fade'
        id='deleteBarang'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header modal-header-jual'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Delete
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body body-modal-jual'>
              Apakah anda yakin ingin menghapus barang ini dari penjualan?
            </div>
            <div className='modal-footer footer-jual'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button
                onClick={deleteBarang}
                type='submit'
                className='btn btn-danger'
                data-dismiss={deleteJualbarang === false ? '' : 'modal'}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {/* modal */}
      <div
        className='modal fade'
        id='updateBarang'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header modal-header-jual'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Update
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body  body-modal-jual'>
              <div className='form-group row'>
                <label
                  // for="inputState"
                  className='col-sm-2 col-form-label'
                >
                  Nama Barang
                </label>
                <select
                  defaultValue={'DEFAULT'}
                  id='inputState'
                  className='form-control form-select ml-3'
                  value={stateNamaBarang}
                  name='nama_barang_jual'
                  onChange={onChange}
                >
                  <option value='DEFAULT'>pilih</option>
                  {dataBarang.map(res => (
                    <option key={res.id}>
                      {res.nama_barang}({res.jumlah_barang})
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group row'>
                <label
                  htmlFor='colFormLabel'
                  className='col-sm-2 col-form-label'
                >
                  Jumlah Barang{' '}
                </label>
                <div className='col-sm-10'>
                  <input
                    type='number'
                    className='form-control'
                    // id='colFormLabel'
                    placeholder='jumlah barang...'
                    name='jumlah_barang'
                    value={stateJumlahBarang}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className='form-group row'>
                <label
                  htmlFor='colFormLabel'
                  className='col-sm-2 col-form-label'
                >
                  Harga Satuan{' '}
                </label>
                <div className='col-sm-10'>
                  <input
                    type='number'
                    className='form-control'
                    // id='colFormLabel'
                    placeholder='harga satuan...'
                    name='harga_satuan'
                    value={stateHargaSatuan}
                    onChange={onChange}
                  />
                </div>
              </div>
            </div>
            <div className='modal-footer footer-jual'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
              <button
                onClick={editDataJualBarang}
                type='submit'
                className='btn btn-primary'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      <p className='txt-barang-dijual'>
        *Barang yang di jual akan masuk ke menu "Hasil Penjualan"{' '}
      </p>

      {alert === false ? null : (
        <div
          className='alert alert-danger alert-dismissible fade show'
          role='alert'
        >
          <strong>Gagal Menambahkan Barang!</strong> mungkin server sedang dalam
          masalah atau koneksi internet anda lambat.
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
          >
            <span aria-hidden='true'>×</span>
          </button>
        </div>
      )}
    </div>
  )
}

export default TableBarangDijual
