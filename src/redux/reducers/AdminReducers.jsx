import { SHOW_SIDEBAR } from "../types";

const initialstate = {
  showSidebar: false
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: !state.showSidebar
      };

    default:
      return state;
  }
};
