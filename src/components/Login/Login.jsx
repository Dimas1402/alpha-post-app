import React from "react";
import "./_Login.scss";
import Logo from "../../Assets/logo3.svg";

const Login = () => {
  return (
    <div className="container-fluid login">
      <div className="row">
        <div className="col box-login">
          <img src={Logo} alt="..." className="img-thumbnail text-center" />
          <form className="mt-5">
            <div className="withicon">
              <input
                className="input-login"
                type="text"
                placeholder="Username"
              />
              <i className="fas fa-user fa-lg fa-fw"></i>
            </div>

            <div className="withicon mt-4">
              <input
                className="input-login"
                type="password"
                placeholder="Password"
              />
              <i className="fas fa-key fa-lg fa-fw"></i>
            </div>
            <button type="submit" className="btn btn-outline-primary btn-login">
              Login
            </button>
          </form>
          <p className="title-forgot-password  ">forgot passsword ? </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
