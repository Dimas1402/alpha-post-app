import React from "react";
import "./_TambahKasir.scss";

const TambahKasir = props => {
  return (
    <>
      <div className="collapse" id="collapseExample">
        <div className="card card-body card-kasir">
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Username</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="staticUsername"
                      placeholder="username"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="staticEmail"
                      placeholder="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">No telp</label>
                  <div className="col-sm-10">
                    <input
                      type="number"
                      className="form-control"
                      id="inputTelp"
                      placeholder="no telp"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="password"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-simpan-data-kasir mt-5"
                >
                  Simpan Data
                </button>
              </div>
              <div className="col-md-6 foto-upload">
                <div className="col-sm-10">
                  <span className="labelUpload">
                    <p className="ml-3 mb-3">Upload Foto</p>
                  </span>

                  <input
                    type="file"
                    name="img"
                    id="upload"
                    onChange={props.handleChange}
                    // value={props.stateImg}
                    className="upload-box"
                    placeholder="Upload File"
                    required
                  ></input>
                  {props.stateImg && (
                    <img
                      className="img-upload ml-3 mt-1"
                      alt=""
                      src={props.stateImg}
                    />
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TambahKasir;
