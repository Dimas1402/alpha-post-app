import React from "react";
import TambahBarang from "../../../../../Data/TambahBarang.json";

const Barang = () => {
  return (
    <>
      <button
        className="btn btn-outline-primary btn-tambah"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        + Tambah Barang
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body  collapse-tambah">
          <form>
            <div className="row">
              <div className="col-md-6 ">
                {TambahBarang.TambahBarang.map(form => (
         
                    <div key={form.id} className="form-group row">
                      <label className="col-sm-2 col-form-label">
                        {form.name}
                      </label>
                      <div className="col-sm-10">
                        <input
                          type={form.type}
                          className="form-control"
                          placeholder={form.placeholder}
                        />
                      </div>
                    </div>
               
                ))}
                <button
                  className="btn btn-outline-primary btn-tambah-barang float-right"
                  type="submit"
                >
                  + Tambah
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Barang;
