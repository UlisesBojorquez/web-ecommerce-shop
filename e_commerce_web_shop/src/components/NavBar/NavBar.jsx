import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>
            <img src={logo} alt='Commerce.js' height='25px' className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === '/' &&
            (<div className={classes.button}>
              <IconButton LinkComponent={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                <Badge badgeContent={totalItems} color='secondary'>
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>)
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;