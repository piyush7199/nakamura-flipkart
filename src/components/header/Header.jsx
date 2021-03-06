import { AppBar, makeStyles, Toolbar, Typography, Box, withStyles, IconButton, Drawer, List, ListItem } from '@material-ui/core'
// import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './SearchBar'
import HeaderButton from './HeaderButton'
import { useState } from 'react';


const useStyle = makeStyles(theme=>({
    header: {
        backgroundColor: '#2874f0',
        height: 55,
    },
    logo: {
        width: 75,
    },
    subURL: {
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container: {
        display: 'flex',
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: '#fff'
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    menu:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    list:{
        width:250,
    },
    costom:{
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}))

const ToolBar = withStyles({
    root: {
        minHeight: 55,
    }
})(Toolbar)

const Header = () => {
    const classes = useStyle()
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setOpen] = useState(false)

    const handleClose = () =>{
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const list = () => {
        return (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem>
                    <HeaderButton />
                </ListItem>
            </List>
        </Box>)
    }

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <IconButton
                color='inherit'
                className={classes.menu}
                onClick={handleOpen}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Link to='/' className={classes.component}>
                    <img src={logoURL} className={classes.logo} />
                    <Box className={classes.container}>
                        <Typography className={classes.subHeading}>Explore <Box component='spam' style={{ color: '#FFE500' }}>plus</Box></Typography>
                        <img src={subURL} className={classes.subURL} />
                    </Box>
                </Link>
                <SearchBar />
                <span className={classes.costom}><HeaderButton /></span>
            </ToolBar>

        </AppBar>
    )
}

export default Header;