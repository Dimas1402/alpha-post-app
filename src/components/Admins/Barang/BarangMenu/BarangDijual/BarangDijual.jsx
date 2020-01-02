import React from 'react'
import './_BarangDijual.scss'

const BarangDijual = ({
  dataBarangOptions,
  getDataClick,
  handleChange,
  stateNama,
  stateJumlah,
  stateHarga,
  kirimBarang
}) => {
  return (
    <div>
      <button
        className='btn btn-tambah-jual'
        type='button'
        data-toggle='collapse'
        data-target='#collapseExample1'
        aria-expanded='false'
        aria-controls='collapseExample'
        onClick={getDataClick}
      >
        + Jual Barang
      </button>
      <div className='collapse' id='collapseExample1'>
        <div className='card card-body card-tambah-jual'>
          <form onSubmit={kirimBarang}>
            <div className='row'>
              <div className='col-md-6 '>
                {/* {JualBarang.JualBarang.map(form => ( */}
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
                    className='form-control'
                    value={stateNama}
                    name='nama_barang_jual'
                    onChange={handleChange}
                  >
                    <option value='DEFAULT'>pilih</option>
                    {dataBarangOptions.map(res => (
                      <option key={res.id}>
                        {res.nama_barang}({res.jumlah_barang})
                      </option>
                    ))}
                  </select>
                </div>
                {/* ---- */}
                <div className='form-group row'>
                  <label
                    // for="inputState"
                    className='col-sm-2 col-form-label'
                  >
                    Jumlah Barang
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='jumlah barang...'
                    name='jumlah_barang'
                    onChange={handleChange}
                    value={stateJumlah}
                  />
                </div>
                {/* ))} */}
                <div className='form-group row'>
                  <label
                    // for="inputState"
                    className='col-sm-2 col-form-label'
                  >
                    Harga Satuan
                  </label>
                  <input
                    type='number'
                    className='form-control'
                    id='exampleFormControlInput1'
                    placeholder='harga satuan...'
                    onChange={handleChange}
                    name='harga_satuan'
                    value={stateHarga}
                  />
                </div>
                <button
                  className='btn btn-outline-primary btn-tambah-barang float-right'
                  type='submit'
                >
                  + Tambah
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BarangDijual
