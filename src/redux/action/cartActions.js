import axios from "axios";

import * as actionTypes from '../constents/cartConstents.js'

const url = 'https://nakamura-flipkart.herokuapp.com/'

export const addToCart = (id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type:actionTypes.ADD_TO_CART,payload:data})
    } catch (error) {
        console.log("Error while calling Api",error.message)
    }
}

export const removeItemFromCart = (id) => (dispatch) => {
     dispatch({type:actionTypes.REMOVE_FROM_CART,payload:id})
}