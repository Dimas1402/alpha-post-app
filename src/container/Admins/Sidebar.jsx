import React from "react";
import Sidebar from "../../components/Admins/Sidebar/Sidebar";
import { connect } from "react-redux";
import { changeShowSidebar } from "../../redux/actions/AdminActions";


class SidebarContainer extends React.Component {
  render() {
    const stateShowSidebar = this.props.showSidebar;
    const showSidebar = this.props.changeShowSidebar;
    return (
      <Sidebar stateShowSidebar={stateShowSidebar} showSidebar={showSidebar} />
    );
  }
}
const mapStateToProps = state => {
  return {
    showSidebar: state.admin.showSidebar
  };
};
export default connect(mapStateToProps, { changeShowSidebar })(
  SidebarContainer
);
