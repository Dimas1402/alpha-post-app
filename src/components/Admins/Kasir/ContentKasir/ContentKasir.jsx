import React from 'react'
import './_ContentKasir.scss'
import TambahKasirContainer from '../../../../container/Admins/Kasir/TambahKasir/TambahKasir'
import TableKasirContainer from '../../../../container/Admins/Kasir/TableKasir/TableKasir'

const ContentKasir = () => {
  return (
    <div id='main' className='col-md-10 col-sm-12 offset-2 content-admin '>
      <div className='row'>
        <div className='col-md-12'>
          <button
            className='btn btn-outline-primary mt-3 btn-tambah-kasir'
            type='button'
            data-toggle='collapse'
            data-target='#collapseExample'
            aria-expanded='false'
            aria-controls='collapseExample'
          >
            + Tambah Kasir
          </button>
          <TambahKasirContainer />
        </div>
        <div className='col-md-12 mt-5 tableKasir'>
          <TableKasirContainer />
        </div>
      </div>
    </div>
  )
}
export default ContentKasir
