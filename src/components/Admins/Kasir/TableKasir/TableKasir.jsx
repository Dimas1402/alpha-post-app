import React from "react";
import "./_TableKasir.scss";

const TableKasir = () => {
  return (
    <table className="table table-data-kasir">
      <thead className="thead thead-Kasir">
        <tr>
          <th scope="col">#</th>
          <th></th>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">No telp</th>
          <th scope="col">Password</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            <img
              alt=""
              src="http://idc2017.stanford.edu/wp-content/uploads/2017/06/Default-avatar.jpg"
            />
          </td>
          <td>Mark</td>
          <td>Mark@gmail.com</td>
          <td>088227362526</td>
          <td>mark123</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableKasir;
