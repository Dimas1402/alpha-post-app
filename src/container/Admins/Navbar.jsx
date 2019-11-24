import React from "react";
import Navbar from "../../components/Admins/ContentAdmin/Content/Navbar/Navbar";

import { changeShowSidebar } from "../../redux/actions/AdminActions";
import { connect } from "react-redux";

class NavbarContainer extends React.Component {
  constructor() {
    super();
    this.state = {
   
    };
  }

  

  render() {
    const showSidebar = this.props.changeShowSidebar;
    return (
      <>
        {console.log(showSidebar)}
        <Navbar showSidebar={showSidebar} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSidebar: state.admin.showSidebar
  };
};

export default connect(mapStateToProps, { changeShowSidebar })(NavbarContainer);
