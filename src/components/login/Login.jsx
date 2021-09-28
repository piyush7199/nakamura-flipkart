import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from "@material-ui/core"
import { useState } from "react"
import { authenticateSignup, authenticateLogin } from "../../services/api.js"

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',
        maxWidth: 'unset !important',
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: "70vh",
        backgroundRepeat: 'no-repeat',
        background: "#2874f0",
        width: "40%",
        backgroundPosition: "center 85%",
        padding: '45px 35px',
        '&>*': {
            color: '#ffffff',
            fontWeigth: 600,
        }
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '&>*': {
            marginTop: 20
        }
    },
    text: {
        color: '#878787',
        fontSize: 13
    },
    loginBtn: {
        textTransform: 'none',
        background: '#fB641b',
        color: '#ffffff',
        height: 48,
        borderRadius: 2,
        fontWeight: 600
    },
    reqBtn: {
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        fontWeight: 600,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
    },
    createAc: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer',
    },
    errors:{
        color:'#ff6161',
        fontSize:10,
        marginTop:10,
        lineHeight:0,
        fontWeight:600
    }
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders,wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: `Looks like you're new here!`,
        subHeading: "Sign up with your mobile number to get started"
    }
}

const initialSignup = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

const initialLogin = {
    username: '',
    password: '',
}

const Login = ({ open, setOpen, setAccount }) => {

    const classes = useStyle()

    const [acc, setAcc] = useState(initialValue.login)
    const [signUp, setSignUp] = useState(initialSignup)
    const [login, setLogin] = useState(initialLogin)
    const [error, setError] = useState(false)


    const toggleAcc = () => {
        setAcc(initialValue.signup)
    }

    const handleClose = () => {
        setOpen(false)
        setAcc(initialValue.login)
    }

    const onInputChnage = (e) => {
        setSignUp({ ...signUp, [e.target.name]: e.target.value })
    }

    const onLoginInputChnage = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }


    const signupUser = async () => {
        let res = await authenticateSignup(signUp)
        if (!res) return;
        handleClose()
        setAccount(signUp.username)
    }

    const logintheUser = async () => {
        let res = await authenticateLogin(login)
        if (!res) {
            setError(true)
            return
        };
        handleClose()
        setAccount(login.username)
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: "flex" }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{acc.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{acc.subHeading}</Typography>
                    </Box>
                    {
                        acc.view === 'login' ? <Box className={classes.login}>
                            <TextField onChange={(e) => onLoginInputChnage(e)} name='username' label='Enter Email/Mobile number' />
                            <TextField onChange={(e) => onLoginInputChnage(e)} name='password' label='Enter Password' />
                            {error && <Typography className={classes.errors}>Invalid Username or Password</Typography>}
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant="contained" onClick={logintheUser} className={classes.loginBtn}>Login</Button>
                            <Typography style={{ textAlign: 'center', color: '#878787', fontSize: 14 }}>OR</Typography>
                            <Button variant="contained" className={classes.reqBtn}>Request OTP</Button>
                            <Typography onClick={() => toggleAcc()} className={classes.createAc}>New to Flipkart? Create an account</Typography>
                        </Box> :
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChnage(e)} name='fullname' label='Enter Firstname' />
                                <TextField onChange={(e) => onInputChnage(e)} name='username' label='Enter Username' />
                                <TextField onChange={(e) => onInputChnage(e)} name='email' label='Enter Email' />
                                <TextField onChange={(e) => onInputChnage(e)} name='password' label='Enter Password' />
                                <TextField onChange={(e) => onInputChnage(e)} name='phone' label='Enter Mobile number' />
                                <Button variant="contained" className={classes.loginBtn} onClick={() => signupUser()}>Signup</Button>
                            </Box>
                    }

                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login