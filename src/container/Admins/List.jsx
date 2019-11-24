import React from "react";


import { changeShowSidebar } from "../../redux/actions/AdminActions";
import { connect } from "react-redux";
import List from "../../components/Admins/List/List";

class ListContainer extends React.Component {
 
  

  render() {
    const showSidebar = this.props.changeShowSidebar;
    return (
      <>
        
       <List showSidebar={showSidebar}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSidebar: state.admin.showSidebar
  };
};

export default connect(mapStateToProps, { changeShowSidebar })( ListContainer);