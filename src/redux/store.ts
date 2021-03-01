import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducers";
import uiReducer from "./reducers/uiReducers";

const initialState = {};
const middleware = [thunk];


const reducer = combineReducers({
  user: userReducer, // user key ma store gareko
  UI: uiReducer,
});

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
  )
);

export default store;