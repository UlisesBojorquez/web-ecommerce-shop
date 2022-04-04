import React from 'react';
import {Container, Typography, Button, Grid} from '@mui/material';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();

    const EmptyCart = () =>(
        <Typography variant='subtitle1'>
            Your don't have items in your shopping cart, 
            <Link to='/' className={classes.link}>start adding some!</Link>
        </Typography>
    );
    const FillCart = () =>(
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQuantity={handleUpdateCartQuantity} onRemoveCartQuantity={handleRemoveFromCart} />
                    </Grid>
                ))};
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal : {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>
                        Empty Cart
                    </Button>
                    <Button LinkComponent={Link} to='/checkout' className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>
                        Checkout 
                    </Button>
                </div>
            </div>
        </>
    );

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className={classes.toolbar}></div>
            <Typography variant='h2' className={classes.title} gutterBottom>
                Your shopping cart
            </Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FillCart />}
        </Container>
    )
}

export default Cart;