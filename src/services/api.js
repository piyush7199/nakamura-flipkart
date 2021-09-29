import axios from 'axios';

const url = 'https://nakamura-flipkart.herokuapp.com'

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`,user)
    } catch (error) {
        console.log('error while callinging api',error.message)
    }
    
}

export const authenticateLogin = async (data) => {
    try {
        let res = await axios.post(`${url}/login`,data)
        return res.data
    } catch (error) {
        console.log('error while callinging login api',error.message)
    }
    
}

export const payUsingPaytm = async (user) => {
    try {
        return await axios.post(`${url}/payment`,user)
    } catch (error) {
        console.log('Error while callinging Paytm api',error.message)
    }
    
}