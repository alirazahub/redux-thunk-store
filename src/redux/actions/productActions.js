import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import storeApi from "../../apis/storeApi";

export const fetchProducts = () => async (dispatch) => {
    const response = await storeApi.get('/products').catch((err) => {
        console.log("Err", err);
    })
    dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
}
export const fetchProduct = (id) => async (dispatch) => {
    const response = await storeApi.get(`/products/${id}`).catch((err) => {
        console.log("Err", err);
    })
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProducts = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}