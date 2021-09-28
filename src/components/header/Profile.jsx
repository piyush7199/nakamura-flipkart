import { makeStyles, Menu, MenuItem, Typography } from "@material-ui/core"
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { useState } from "react"
import { Link } from "react-router-dom";

const useStyle = makeStyles({
    component: {
        marginTop: 40
    },
    logout: {
        marginLeft: 15,
        fontSize: 15,
    },
})

const Profile = ({ account, setAccount }) => {
    const classes = useStyle()

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget)
    }

    const logout =()=>{
        setAccount('')
    }

    return (
        <>
            <Link to='/'>
                <Typography onClick={handleClick}>
                    {account}
                </Typography>
            </Link>
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={() => {handleClose();logout();}}>
                    <PowerSettingsNewIcon fontSize='small' color='primary' />
                    <Typography className={classes.logout}>Logout</Typography></MenuItem>
            </Menu>
        </>
    )
}

export default Profile