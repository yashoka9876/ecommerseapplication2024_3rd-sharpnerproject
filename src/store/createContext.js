import { createContext } from "react";

const CartContext=createContext({
    cartElements:[],
    CartElementHandler:()=>{}
})
export default CartContext;