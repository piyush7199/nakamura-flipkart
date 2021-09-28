import axios from "axios";

import * as action from '../constents/productContents.js'

const url = 'https://nakamura-flipkart.herokuapp.com/'

export const getProducts = () => async (dispatch)  =>{
    try {
        let {data} = await axios.get(`${url}/products`)
        dispatch({type:action.GET_PRODUCTS_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:action.GET_PRODUCTS_FAIL,payload:error.response})
    }
}

export const getProductDetails = (id) => async (dispatch)  =>{
    try {
        let {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type:action.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
        
    } catch (error) {
        dispatch({type:action.GET_PRODUCT_DETAILS_FAIL,payload:error.response})
    }
}

