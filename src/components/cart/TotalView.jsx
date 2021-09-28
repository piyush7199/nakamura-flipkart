import { Box, Typography, makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react"
import clsx from "clsx"

const useStyle = makeStyles({
    component: {
        marginLeft: 15,
        // 
    },
    header: {
        padding: '15px 24px',
        background: '#fff',
    },
    container: {
        // padding: '15px 24px',
        '&>*':{
            marginTop:20,
            fontSize:14
        }
    },
    greyText:{
        color:'#878787'
    },
    price:{
        float:'right'
    },
    total:{
        fontSize:18,
        fontWeight:600,
        borderTop:'1px dashed #e0e0e0',
        padding:'20px 0',
        borderBottom:'1px dashed #e0e0e0',
    }
})

const TotalView = ({ cartItems }) => {

    const classes = useStyle()
    const [price , setPrice] = useState(0)
    const [dicount,setDiscount] = useState(0)

    useEffect(()=>{
        totalAmount();
    },[cartItems])

    const totalAmount =()=>{
        let price = 0,discount = 0;
        cartItems.map(item => {
            price+=item.price.mrp;
            discount += (item.price.mrp-item.price.cost)
        })
        setPrice(price)
        setDiscount(discount)
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.header} style={{borderBottom: '1px solid #f0f0f0'}}>
                <Typography className={classes.greyText}>PRICE DETAILS</Typography>
            </Box>
            <Box className={clsx(classes.header, classes.container)}>
                <Typography>Price ({cartItems.length} item) <span className={classes.price}>₹{price}</span> </Typography>
                <Typography>Discount <span className={classes.price}>-₹{dicount}</span></Typography>
                <Typography>Delivery Charge <span className={classes.price}>₹40</span></Typography>
                <Typography className={classes.total}>Total Amount <span className={classes.price}>₹{price-dicount+40}</span></Typography>
                <Typography style={{color:'green',fontSize: 16}}>You will save ₹{dicount-40} on this order</Typography>
            </Box>
        </Box>
    )
}

export default TotalView