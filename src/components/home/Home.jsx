import NavBAr from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

import { Box, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getProducts as listProducts} from '../../redux/action/productActions.js'
import MidSlide from "./MidSlide";

const useStyle = makeStyles({
    component: {
        padding: 10,
        backgroundColor: '#f2f2f2',
    },
    rightwrapper: {
        background: "#ffffff",
        padding: 5,
        margin: "12px 0 0 10px",
        width:"17%"
    }
})

const Home = () => {
    const classes = useStyle()

    const {products}  = useSelector(state => state.getProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])


    return (
        <div>
            <NavBAr />
            <Box className={classes.component}>
                <Banner />
                <MidSlide products={products} />
                <MidSection />
                <Slide timer={false} title='Discounts for You' products={products} />
                <Slide timer={false} title='Top Selection' products={products} />
                <Slide timer={false} title='Suggested Items' products={products} />
                <Slide timer={false} title='Recommended Items' products={products} />
                <Slide timer={false} title='Best Seller' products={products} />
                <Slide timer={false} title='Top Review' products={products} />
                <Slide timer={false} title='One and All' products={products} />
                <Slide timer={false} title='Try This' products={products} />
            </Box>

        </div>
    )
}

export default Home;