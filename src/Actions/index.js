import * as actionTypes from "../Constants/action-types";
import axios from "axios";

//action creator is a function that returns an action object
export const fetchProduct = () => async (dispatch, getState) => {
    var response = await axios.get("http://localhost:3004/Product");
    console.log(response);

    //dispatch response data to FETCH_TASKS action; it will be received by the reducer
    dispatch({
        type: actionTypes.FETCH_PRODUCT,
        payload: response.data
    });
};

export const createProduct = (data) => async (dispatch, getState) => {
    var response = await axios.post(`http://localhost:3004/Product`, data);
    console.log(response);

    dispatch({
        type: actionTypes.CREATE_PRODUCT,
        payload: response.data
    });
    dispatch(fetchProduct());
};

export const deleteProduct = (id) => async (dispatch, getState) => {
    var response = await axios.delete(`http://localhost:3004/Product/${id}`);
    console.log(response);

    dispatch({
        type: actionTypes.DELETE_PRODUCT,
    });
    dispatch(fetchProduct());
};

export const singleProduct = (id) => async (dispatch, getState) => {
    var response = await axios.get(`http://localhost:3004/Product/${id}`);
    // console.log(response.data);

    //dispatch response data to FETCH_TASKS action; it will be received by the reducer
    dispatch({
        type: actionTypes.FETCH_PRODUCT,
        payload: response.data
    });
};
export const updateProduct = (data, id) => async (dispatch, getState) => {
    // console.log(data, id);
    let response = await axios.put(`http://localhost:3004/Product/${id}`, data);
    console.log(response);

    dispatch({
        type: actionTypes.EDIT_PRODUCT,
    });
    dispatch(fetchProduct());
};

export const createUser = (data) => async (dispatch, getState) => {
    var response = await axios.post(`http://localhost:3004/User`, data);
    console.log(response);

    dispatch({
        type: actionTypes.CREATE_USER,
        payload: response.data
    });
};