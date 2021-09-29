import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/action/productActions.js";
import { Box, makeStyles, Typography,Grid } from "@material-ui/core";

import clsx from 'clsx'

import ActionItem from "./ActionItem.jsx";
import ProductDetail from "./ProductDetail.jsx";

const useStyle = makeStyles(theme=>({
    component: {
        marginTop: 55,
        background: '#F2f2f2',
    },
    container: {
        background: '#fff',
        display: 'flex',
        [theme.breakpoints.down('md')]:{
            margin:0,
            width:'fit-content',
            padding:10,
        }
    },
    rightContainer: {
        marginTop: 50,
        '&>*': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '&>*': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyText: {
        color: '#878787'
    },
    price: {
        fontSize: 28,
        [theme.breakpoints.down('sm')]:{
            fontWeight:600
        }
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00cc00'
    },
    title_long:{
        [theme.breakpoints.down('sm')]:{
            fontWeight:600,
            // fontSize:20
        }
    }
}))

const DetailView = ({ match }) => {

    const classes = useStyle()
   const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    
    const { product } = useSelector(state => state.getProductDetails)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch])


    return (
        <Box className={classes.component}>
        
            {product && Object.keys(product).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography className={classes.title_long}>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyText)} style={{marginTop: 5}}>8 Ratings & 2 Reviews<span><img src={fassured} style={{ width: 77, marginLeft: 20 }} /></span></Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyText}><strike>₹{product.price.mrp}</strike></span> &nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388e3c' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product}/>

                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default DetailView;