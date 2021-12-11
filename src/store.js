import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getmenureducer } from "./Reducers/MenuReducer";

const reducer = combineReducers({
  getmenu: getmenureducer,
});
// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("user_data"))
//   : {};
// const initialState = {
//   userLogin: { user: userInfoFromStorage },
// };

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
