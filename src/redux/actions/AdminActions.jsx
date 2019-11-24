import {SHOW_SIDEBAR} from "../types"

export const changeShowSidebar = () => dispatch => {
    return dispatch({
        type:SHOW_SIDEBAR
    })
}