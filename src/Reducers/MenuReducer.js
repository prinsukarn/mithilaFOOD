import {
  GETMENU_FAIL,
  GETMENU_REQUEST,
  GETMENU_SUCCESS,
} from "../Constants/MenuConstants";

// Get Category Reducer
export const getmenureducer = (
  state = {
    getmenu: [],
  },
  action
) => {
  switch (action.type) {
    case GETMENU_REQUEST:
      return { loading: true, getmenu: [] };
    case GETMENU_SUCCESS:
      return { loading: false, getmenu: action.payload };
    case GETMENU_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
