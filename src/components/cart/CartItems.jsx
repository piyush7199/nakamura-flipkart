import { Box, Button, Card, makeStyles, Typography } from "@material-ui/core";
import clsx from 'clsx'


import GroupButtons from "./GroupButtons";

const useStyle = makeStyles({
    component: {
        display: 'flex',
        borderRadius: 0,
        borderTop:'1px solid #f0f0f0'
    },
    leftComponent: {
        margin: 20,
        display:'flex',
        flexDirection:'column',
    },
    rightComponent: {
        margin: 20,
    },
    smallText: {
        fontSize: 14
    },
    greyText: {
        color: '#878787'
    },
    price: {
        fontSize: 18,
        fontWeight: 600,
    },
    image:{
        height:110,
        width:110,
    },
    button:{
        marginTop:20,
        fontSize:16,

    }
})

const CartItem = ({ item,removeItem }) => {

    const classes = useStyle()
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    return (
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src={item.url} className={classes.image} />
                <GroupButtons />
            </Box>
            <Box className={classes.rightComponent}>
                <Typography>{item.title.longTitle}</Typography>
                <Typography className={clsx(classes.smallText, classes.greyText)} style={{ marginTop: 10 }}>Seller: Nakamura
                    <img src={fassured} style={{ width: 50, marginLeft: 10 }} /></Typography>
                <Typography style={{ margin: '20px 0' }}>
                    <span className={classes.price}>₹{item.price.cost}</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyText}>₹<strike>{item.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388e3c' }}>{item.price.discount} off</span>
                </Typography>
                <Button className={classes.button} onClick={() => removeItem(item.id)}>Remove</Button>
            </Box>
        </Card>
    )
}

export default CartItem;