import React, { useContext, useState } from 'react'
import Header from '../components/header/Headers'
import { Outlet } from 'react-router-dom'
import Cart from '../components/Cart/Cart';
import axios from 'axios';
import AuthContext from '../store/auth-context';
import CartContext from '../store/createContext';


const RootLayout = () => {
    const [cartItem,setCartItem]=useState(false);
    const Ctx=useContext(AuthContext);
   const email= Ctx.email;
   const cartCtx=useContext(CartContext)
  
   
    const handleCartItem=()=>{
        setCartItem((item)=>!item);
        axios.get(`https://crudcrud.com/api/0498a9c2c11a4cb7bfebd6ab47237c7f/Cart${email.replace(/[@.]/g, '')}`)
        .then(res=>cartCtx.setCartHandler(res.data))
        .catch(err=>console.log(err))
      }
    
  return (
    <>
    <Header  onHandleCartItem={handleCartItem} />
    { cartItem && <Cart onHandleCartItem={handleCartItem} />}
    <Outlet/>

    </>
  )
}

export default RootLayout