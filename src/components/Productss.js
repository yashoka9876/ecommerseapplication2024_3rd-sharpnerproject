import React from 'react';
import classes from './Productss.module.css'
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]


    
    const Productss = () => {
      return (
        <div className={classes.container}>
            <ul className={classes.UoList}>
        {
            productsArr.map(item=><li className={classes.list} key={item.id}>
                <div>
                    <p>{item.title}</p>
                    <img src={item.imageUrl} alt='food images' />
                </div>
                <div className={classes.description}>
                    <span>{item.price}$</span>
                    <button className={classes.listButton}>Add to cart</button>
                </div>
            </li>)
        }
</ul>
        </div>
      )
    }
    
    export default Productss