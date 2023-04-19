import { combineReducers } from "redux";
import productReducer, { userReducer } from '../Reducers/task-reducers';

const allReducers = combineReducers({
    product: productReducer,
    user: userReducer
});
export default allReducers;