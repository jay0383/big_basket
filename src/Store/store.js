import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import allReducers from '../Reducers/index'

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(reduxThunk)));
export default store;