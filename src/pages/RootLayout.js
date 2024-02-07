import React, { useState } from 'react'
import Header from '../components/header/Headers'
import { Outlet } from 'react-router-dom'
import Cart from '../components/Cart/Cart';

const RootLayout = () => {
    const [cartItem,setCartItem]=useState(false);
    const handleCartItem=()=>{
        setCartItem((item)=>!item);
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