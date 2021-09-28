// import SearchIcon from '@material-ui/icons/Search';

// import { alpha} from '@material-ui/core/styles';
// import { makeStyles, InputBase} from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//     grow: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       display: 'none',
//       [theme.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//     },
//     search: {
//       borderRadius: 2,
//       backgroundColor: "#fff",
//       marginLeft: 10,
//       width: '38%',
//       display:'flex',
//     },
//     searchIcon: {
//       padding: 5,
//       height: '100%', 
//       display: 'flex',
//       color:'blue'
//     },
//     inputRoot: {
//       width:'100%', 
//       fontSize:'unset',
//     },
//     inputInput: {
//         paddingLeft:20
//     },
//     sectionDesktop: {
//       display: 'none',
//       [theme.breakpoints.up('md')]: {
//         display: 'flex',
//       },
//     },
//     sectionMobile: {
//       display: 'flex',
//       [theme.breakpoints.up('md')]: {
//         display: 'none',
//       },
//     },
//   }));

// const SearchBar = () => {
//     const classes=useStyles()
//     return (
//         <div className={classes.search}>
            
//             <InputBase
//               placeholder="Search for products, brands and more..."
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//         </div>
//     )
// }

// export default SearchBar;

import { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, fade, InputBase, List, ListItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'; // hooks
import { getProducts  as listProducts} from '../../redux/action/productActions.js';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
    list: {
      position: 'absolute',
      color: '#000',
      background: '#FFFFFF',
      marginTop: 36
    }
}))

const SearchBar = () => {
    const classes = useStyle();
    const [ text, setText ] = useState();
    const [ open, setOpen ] = useState(true)

    const getText = (text) => {
        setText(text);
        setOpen(false)
    }

    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className={classes.search}>
            <InputBase
              placeholder="Search for products, brands and more"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            {
              text && 
              <List className={classes.list} hidden={open}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <Link 
                        to={`/product/${product.id}`} 
                        style={{ textDecoration:'none', color:'inherit'}}
                        onClick={() => setOpen(true)}  
                      >
                        {product.title.longTitle}
                      </Link>
                    </ListItem>
                  ))
                }  
              </List>
            }
        </div>
    )
}

export default SearchBar;