import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "../components/Admins/Admin/Admin";
import Barang from "../components/Admins/Barang/Barang";
import Dashboard from "../components/Admins/Admin/AdminMenu/Dashboard/Dashboard";
import Dashboard2 from "../components/Admins/Admin/AdminMenu/Dashboard/Dashboard2";
import HasilPenjualan from "../components/Admins/HasilPenjualan/HasilPenjualan";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <h1>this is routes</h1>} />
        {/* <Route path="/admin" component={Admin} /> */}
        <Route path="/admin/dashboard" component={Admin}/>
        <Route path="/admin/barang" component={Barang}/>
        <Route path="/admin/hasil_penjualan" component={HasilPenjualan}/>
        <Route path="/admin/dashboard/harian" component={Dashboard}/>
        <Route path="/admin/dashboard/bulanan" component={Dashboard2}/>
      </Switch>
    </Router>
  );
};

export default Routes;
