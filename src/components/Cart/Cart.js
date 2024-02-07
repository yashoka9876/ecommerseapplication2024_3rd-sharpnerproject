import React, { useContext } from 'react';
import classes from './Cart.module.css'

import CartContext from '../../store/createContext';


const Cart = (props) => {
   const CTX= useContext(CartContext);
   console.log(CTX.cartElements);
  return (
   <section className={classes.CartContainer}>
        <div className={classes.cross}>
            <button onClick={()=>props.onHandleCartItem()}>X</button>
        </div>
        <div className={classes.cartHeader}>
            <span>Item</span>
            <span>Prize</span>
            <span>quantity</span>
        </div>
    <ul className={classes.UOlist}>
        {
            CTX.cartElements.map(item=><li className={classes.cartList}>
                <div className={classes.div1}>
                    <img src={item.imageUrl} alt='images'/>
                    <p>{item.title}</p>
                    <p>{item.quantity}</p>
                </div>
                <div className={classes.div2}>
                    {item.price}
                </div>
                <div className={classes.div3}>
                    <input />
                    <button>remove</button>
                </div>
            </li>)
        }
    </ul>
   </section>
  )
}

export default Cart