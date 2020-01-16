import React from 'react'
import './_TableKasir.scss'

const TableKasir = props => {
  return (
    <table className='table table-data-kasir'>
      <thead className='thead thead-Kasir'>
        <tr>
          <th scope='col'>#</th>
          <th></th>
          <th scope='col'>Nama</th>
          <th scope='col'>Email</th>
          <th scope='col'>No telp</th>
          <th scope='col'>Password</th>
          <th scope='col'></th>
        </tr>
      </thead>
      <tbody>
        {props.getDataKasir.map((res, index) => (
          <tr key={res._id}>
            <th scope='row'>{index + 1}</th>
            <td>
              <img
                onClick={() => props.handleShowImage(res)}
                alt=''
                src={res.foto}
                data-toggle='modal'
                data-target='.bd-example-modal-lgs'
                id='foto'
              />
              {/* modal */}
              <div
                className='modal fade bd-example-modal-lgs modal-kasir-img'
                tabIndex={-1}
                role='dialog'
                aria-labelledby='myLargeModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog modal-lg'>
                  <div className='modal-content modal-img-kasir'>
                    <img alt='' src={props.stateFoto} />
                  </div>
                </div>
              </div>
              {/* modal */}
            </td>
            <td>{res.username}</td>
            <td>{res.email}</td>
            <td>{res.telp}</td>
            <td>{res.password}</td>
            <td>
              <i
                data-toggle='modal'
                data-target='#deleteKasir'
                className='fas fa-trash-alt delete-table-kasir'
                onClick={() => props.dataEditKasir(res)}
              ></i>{' '}
              <i
                data-toggle='modal'
                data-target='#exampleModal'
                data-whatever='@fat'
                className='fas fa-edit edit-table-kasir'
                onClick={() => props.dataEditKasir(res, index)}
              ></i>
            </td>
          </tr>
        ))}
      </tbody>
      {/* modal delete */}
      <div
        className='modal fade'
        id='deleteKasir'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header header-table-kasir'>
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
            <div className='modal-body body-table-kasir'>
              Apakah anda ingin menghapus {props.stateUsername} dari daftar
              kasir ?
            </div>
            <div className='modal-footer footer-table-kasir'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Tidak
              </button>
              <button type='button' className='btn btn-danger ' onClick={props.handleDeleteDataKasir}>
                Hapus
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal delete */}
      {/* modal edit */}
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
            <div className='modal-header header-modal-kasir'>
              <h5 className='modal-title' id='exampleModalLabel'>
                Edit Data Kasir
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
            <div className='modal-body modal-body-editKasir'>
              <form>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Username
                  </label>
                  <input
                    onChange={props.handleChangeText}
                    value={props.stateUsername}
                    name='username'
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Email
                  </label>
                  <input
                    onChange={props.handleChangeText}
                    value={props.stateEmail}
                    name='email'
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    No Telepon
                  </label>
                  <input
                    onChange={props.handleChangeText}
                    value={props.stateTelp}
                    name='telp'
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='form-group'>
                  <label htmlFor='recipient-name' className='col-form-label'>
                    Password
                  </label>
                  <input
                    onChange={props.handleChangeText}
                    value={props.statePassword}
                    name='username'
                    type='text'
                    className='form-control'
                    id='recipient-name'
                  />
                </div>
                <div className='form-group'>
                  <span className='labelUpload'>
                    <p className='ml-3 mb-3'>Upload Foto</p>
                  </span>
                  <input
                    type='file'
                    name='img'
                    id='upload'
                    onChange={props.handleChangeFoto}
                    value={props.stateImgs}
                    name='foto'
                    className='upload-box'
                    placeholder='Upload File'
                    required
                  ></input>

                  <img
                    className='img-upload ml-3 mt-1'
                    alt=''
                    src={props.stateImg}
                  />
                </div>
              </form>
            </div>
            <div className='modal-footer modal-footer-edit-kasir'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Tidak
              </button>
              <button onClick={props.handleEditAkunKasir}   data-dismiss='modal' type='button' className='btn btn-primary'>
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal edit */}
    </table>
  )
}

export default TableKasir
