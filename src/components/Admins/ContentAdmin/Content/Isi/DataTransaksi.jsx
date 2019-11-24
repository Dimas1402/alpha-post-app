import React from "react";
import "./DataTransaksi.scss";
import Data from "../../../../../Data/DataTransaksi.json";

const DataTransaksi = () => {
  return (
    <>
      {Data.DataTransaksi.map(data => (
        <div key={data.id} className="card modal-content ml-2" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              <i className={data.icon}></i> {" "}{data.name} {" "}
            </h5>
            <div
              style={{
                background: "#1FC9C0",
                height: "100px",
                borderRadius: "10px"
              }}
              className="d-flex flex-row"
            >
              <h1 className="mt-2 ml-3 mt-3">Rp</h1>{" "}
              <h3 className="mt-4 ml-3 ">{data.jumlah}</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DataTransaksi;
