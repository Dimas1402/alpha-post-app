import React from "react";
import "./_BarangDijual.scss";
import JualBarang from "../../../../../Data/JualBarang.json";

const BarangDijual = () => {
  return (
    <div>
      <button
        className="btn btn-tambah-jual"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample1"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        + Jual Barang
      </button>
      <div className="collapse" id="collapseExample1">
        <div className="card card-body card-tambah-jual">
          <form>
            <div className="row">
              <div className="col-md-6 ">
                {JualBarang.JualBarang.map(form => (
                  <div key={form.id} className="form-group row">
                    <label
                      // for="inputState"
                      className="col-sm-2 col-form-label"
                    >
                      {form.name}
                    </label>
                    <select defaultValue={'DEFAULT'} id="inputState" className="form-control">
                    <option value="DEFAULT" disabled>pilih</option>
                    <option>pensil</option>
                    </select>
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
    </div>
  );
};

export default BarangDijual;
