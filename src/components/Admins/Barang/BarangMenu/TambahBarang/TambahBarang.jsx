import React from 'react'
import TambahBarangjson from "../../../../../Data/TambahBarang.json"

const TambahBarang = props => {
  return (
    <>
      <button
        className='btn btn-outline-primary btn-tambah'
        type='button'
        data-toggle='collapse'
        data-target='#collapseExample'
        aria-expanded='false'
        aria-controls='collapseExample'
      >
        + Tambah Barang
      </button>
      <div className='collapse' id='collapseExample'>
        <div className='card card-body  collapse-tambah'>
          <form onSubmit={props.submit}>
            <div className='row'>
              <div className='col-md-6 '>
                {TambahBarangjson.TambahBarang.map((form) => (
                  <div key={form.id} className='form-group row'>
                    <label className='col-sm-2 col-form-label'>
                      {form.name}
                    </label>
                    <div className='col-sm-10'>
                      <input
                        onChange={props.handleChange}
                        name={form.key}
                        value={props.state[form.value]}
                        type={form.type}
                        className='form-control'
                        placeholder={form.placeholder}
                       required
                      />
                    </div>
                  </div>
                ))}
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
    </>
  )
}

export default TambahBarang
