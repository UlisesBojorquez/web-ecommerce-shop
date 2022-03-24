import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material';
//import Products from './components/Products/Products';
//import NavBar from './components/NavBar/NavBar';
import { Products, NavBar, Cart, Checkout } from './components'
import { commerce } from './lib/commerce';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState({});

  const fetchProducts = async () =>{
    const {data} = await commerce.products.list(); //promise
    setProducts(data);
  }

  const fetchCart = async () =>{
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) =>{
    const {cart} =await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQuantity = async (productId, quantity) =>{
    const {cart} = await commerce.cart.update(productId,{quantity});
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) =>{
    const {cart} = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async () =>{
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <Grid>
        <NavBar totalItems={cart.total_items}/>
        <Routes>
          <Route exact path='/' element={<Products products={products} onAddToCart={handleAddToCart} />}/>
          <Route exact path='/cart' element={<Cart cart={cart} 
            handleUpdateCartQuantity={handleUpdateCartQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart} />}/>
          <Route exact path='/checkout' element={<Checkout cart={cart}/>} />
        </Routes>    
      </Grid>
    </Router>
  )
};

export default App;