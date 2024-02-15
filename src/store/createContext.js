import { createContext } from "react";

const CartContext=createContext({
    cartElements:[],
    CartElementHandler:()=>{},
    setCartHandler:()=>{}
})
export default CartContext;