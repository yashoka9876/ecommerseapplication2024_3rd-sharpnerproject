import React, { useContext } from 'react';
import classes from './Productss.module.css'
import CartContext from '../store/createContext';
const productsArr = [

    {
    id:'m1',
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    id:'m2',
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    id:'m3',

    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    id:'m4',
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]


    
    const Productss = () => {

       const CTX= useContext(CartContext)












      return (
        <div className={classes.container}>
            <ul className={classes.UoList}>
        {
            productsArr.map(item=><li   className={classes.list} key={item.id}>
                <div>
                    <p>{item.title}</p>
                    <img src={item.imageUrl} alt='food images' />
                </div>
                <div className={classes.description}>
                    <span>{item.price}$</span>
                    <button className={classes.listButton} onClick={()=>CTX.CartElementHandler({
                        ...item
                    })}>Add to cart</button>
                </div>
            </li>)
        }
</ul>
        </div>
      )
    }
    
    export default Productss