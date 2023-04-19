import { initialState , initialState_user } from '../Data/data';
import * as actionTypes from '../Constants/action-types';

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCT:
            return action.payload;
        case actionTypes.CREATE_PRODUCT:
            return [...state, action.payload];
        case actionTypes.DELETE_PRODUCT:
            return state;
        case actionTypes.SINGLE_PRODUCT:
            return action.payload;
        case actionTypes.EDIT_PRODUCT:
            return state;
        default:
            return state;
    }
};
export default productReducer;


export const userReducer = (state = initialState_user, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}