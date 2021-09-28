import { Box, Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { addToCart } from "../../redux/action/cartActions";
import { useDispatch } from 'react-redux'
import {useHistory} from 'react-router-dom'
import { payUsingPaytm } from "../../services/api.js";
import {post} from '../../utils/paytm.js'

const useStyle = makeStyles(theme=>({
    leftContainer: {
        minWidth:'40%',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]:{
            padding:'20px 40px',
        }
    },
    image: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width:'95%'
    },
    button:{
        height:50,
        width:'46%',
        borderRadius:2
    },
    addToCart:{
        background:'#ff9f00',
        color:'#ffffff',
        marginRight:10
    },
    buyNow:{
        background:'#fb641b',
        color:'#ffffff'
    }
}))

const ActionItem = ({ product }) => {
    const classes = useStyle()
    const history = useHistory()
    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(addToCart(product.id))
        history.push('/cart')
    }

    const buyNow = async () => {
        let res = await payUsingPaytm({amount:5000,email:'maheswaripiyush9@gmail.com'})
        let infomation = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params:res
        }
        post(infomation)
    }

    return (
        <Box className={classes.leftContainer}>
            <img src={product.detailUrl} className={classes.image} /><br/>
            <Button onClick={()=> addCart()} variant='contained' className={clsx(classes.button,classes.addToCart)}><ShoppingCartIcon /> Add To Cart</Button>
            <Button onClick={() => buyNow()} variant='contained' className={clsx(classes.button,classes.buyNow)}><FlashOnIcon /> Buy Now</Button>
        </Box>
    )
}

export default ActionItem;