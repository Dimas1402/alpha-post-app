import React from 'react'
import './_tableTambahBarang.scss'
import TambahBarangjson from "../../../../../Data/TambahBarang.json"

const TableTambahBarang = ({ dataBarang, idBarang, deleteBarangCon,handleChangeEdit,state,handleDataBarang, dataEditbarang, isLoading}) => {
  return (
    <div className='table-tambah-barang'>
      <table className='table mt-4 tambahBarang'>
        <thead className='thead'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Nama Barang</th>
            <th scope='col'>Jumlah Barang</th>
            <th scope='col'>Harga Satuan</th>
            <th scope='col'>Modal</th>

            <th scope='col'></th>
          </tr>
        </thead>
        {dataBarang.length === 0 ? (
          <>
            <td></td>
            <td>
              {' '}
              <h5>Kosong</h5>{' '}
            </td>
            <td>
              <h5>Kosong</h5>
            </td>
            <td>
              <h5>Kosong</h5>
            </td>{' '}
            <td>
              <h5>Kosong</h5>
            </td>
          </>
        ) : (
          <tbody>
            {dataBarang.map((datas, index) => (
              <tr key={datas._id}>
                <th scope='row'>{index + 1}</th>
                <td>{ datas.nama_barang}</td>
                <td>{datas.jumlah_barang}</td>
                <td>Rp.{datas.harga_satuan}</td>
                <td>Rp.{datas.total}</td>
                <td>
                  <i
                    onClick={() => idBarang(datas)}
                    data-toggle='modal'
                    data-target='#exampleModal'
                    className='fas fa-trash-alt delete-table-tambah-barang'
                  ></i>{' '}
                  <i
                    onClick={() => handleDataBarang(datas,index)}
                    data-toggle='modal'
                    data-target='#modalEdit'
                    className='fas fa-edit edit-table-tambah-barang'
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {/* Modal delete */}
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h6 className='modal-title' id='exampleModalLabel'>
                Delete
              </h6>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body body-modal-tambah-barang'>
              Apakah anda yakin ingin menghapus barang tersebut?
            </div>
            <div className='modal-footer footer-modal-tambah-barang'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Tidak
              </button>
              <button
                type='button'
                className='btn btn-danger'
                onClick={deleteBarangCon}
                data-dismiss='modal'
               
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal delete */}
      {/* modal edit */}
      <div
        className='modal fade'
        id='modalEdit'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h6 className='modal-title' id='exampleModalLabel'>
              Edit
              </h6>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>×</span>
              </button>
            </div>
            <div className='modal-body body-modal-edit-barang'>
            <form onSubmit="">
            <div className='row'>
              <div className='col-md-12 '>
                {TambahBarangjson.TambahBarang.map((form) => (
                  <div key={form.id} className='form-group row'>
                    <label className='col-sm-2 col-form-label'>
                      {form.name}
                    </label>
                    <div className='col-sm-10'>
                      <input
                        onChange={handleChangeEdit}
                        name={form.key}
                        value={state[form.value]}
                        type={form.type}
                        className='form-control'
                        placeholder={form.placeholder}
                       required
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='modal-footer footer-modal-edit-barang'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Tidak
              </button>
              <button
                type='sumbit'
                className='btn btn-warning'
                onClick={dataEditbarang}
               
              >
                Edit
              </button>
            </div>
          </form>
            </div>
          
          </div>
        </div>
      </div>
      {/* modal edit */}
    </div>
  )
}

export default TableTambahBarang
