import React from 'react';
import classes from './Cart.module.css'
const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]

const Cart = () => {
  return (
   <section className={classes.CartContainer}>
    <ul className={classes.UOlist}>
        <div className={classes.cross}>
            <span>X</span>
        </div>
        <div className={classes.cartHeader}>
            <span>Item</span>
            <span>Prize</span>
            <span>quantity</span>
        </div>
        {
            cartElements.map(item=><li key={item.id} className={classes.cartList}>
                <div className={classes.div1}>
                    <img src={item.imageUrl} alt='images'/>
                    <p>{item.title}</p>
                </div>
                <div className={classes.div2}>
                    {item.price}
                </div>
                <div className={classes.div3}>
                    <input value={1}/>
                    <button>remove</button>
                </div>
            </li>)
        }
    </ul>
   </section>
  )
}

export default Cart