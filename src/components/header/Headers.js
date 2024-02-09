import React, { useContext } from 'react'
import classes from './Headers.module.css'
import CartContext from '../../store/createContext';
import { Link } from 'react-router-dom';
const Header = (props) => {

  let CTX=useContext(CartContext);
  let totalQuantity=CTX.cartElements.reduce((a,b)=>{
    return b.quantity+a;
  },0)

  return (
   <header className={classes.headerCon}>
         <ul className={classes.container}>
            <li><Link to=''>Home</Link></li>
            <li><Link to='store'>Store</Link></li>
            <li><Link to='about'>About</Link></li>
            <div className={classes.button}>
                <button onClick={()=>props.onHandleCartItem()}>cart<span className={classes.headerCartNo}>{totalQuantity}</span></button>
            </div>
         </ul>
         <div className={classes.generic}>
          The Generics
         </div>
         <button className={classes.latestalbum} >Get our latest albut</button>
         <button className={classes.playbtn}>►</button>
   </header>
  )
}

export default Header