import { makeStyles } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constents/data'

const useStyle = makeStyles(theme=>({
    logo: {
        width: '100%',
        height: 280,
        [theme.breakpoints.down('sm')]:{
            objectFit:'cover',
            height:180,
        }
    },
    carousel:{
        marginTop:10,
    }
}))

const Banner = () => {
    const classes = useStyle()
    return (
        <Carousel
            autoPlay={true}
            animation={'slide'}
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style:{
                    background:"#ffffff",
                    color:'#494949',
                    borderRadius:0,
                    margin:0,
                }
            }}
            className={classes.carousel}
        >
            {
                bannerData.map((image) => <img src={image} className={classes.logo} />)
            }
        </Carousel>

    )
}

export default Banner;