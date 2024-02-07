import React, { useContext } from 'react'
import classes from './Headers.module.css'
import CartContext from '../../store/createContext';
const Header = (props) => {

  let CTX=useContext(CartContext);
  let totalQuantity=CTX.cartElements.reduce((a,b)=>{
    return b.quantity+a;
  },0)

  return (
   <header className={classes.header}>
         <ul className={classes.container}>
            <li>Home</li>
            <li>Store</li>
            <li>About</li>
            <div className={classes.button}>
                <button onClick={()=>props.onHandleCartItem()}>cart<span className={classes.headerCartNo}>{totalQuantity}</span></button>
            </div>
         </ul>
   </header>
  )
}

export default Header