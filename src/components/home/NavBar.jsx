import { navData } from "../../constents/data";

import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
    components: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent:'space-between',
        overflowX:'overlay',
        [theme.breakpoints.down('md')]:{
            margin:0
        }
    },
    container:{
        textAlign:'center',
        padding:'12px 8px'

    },
    image:{
        width:64
    },
    texts:{
        fontSize:14,
        fontWeight:600
    }
}));

const NavBAr = () => {
    const classes = useStyles()
    return (
        <Box className={classes.components}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} className={classes.image} />
                        <Typography className={classes.texts}>{data.text}</Typography>
                    </Box>
                ))
            }

        </Box>
    )
}

export default NavBAr;