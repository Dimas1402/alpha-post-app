import React from 'react'
import SidebarContainer from "../../../container/Admins/Sidebar"


const withSidebar = OriginalComponent => {
    class NewComponent extends React.Component{
        render(){
            return(
                <>
                <SidebarContainer/>
                <OriginalComponent/>
                </>
            )
        }
    }
    return NewComponent
}

export default withSidebar