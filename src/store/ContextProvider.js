
import React, { useState } from 'react'
import CartContext from './createContext'


export const cartElements = [

    {
    id:'m1',
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 2,
    
    },
    
    {
    id:'m2',
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 3,
    
    },
    
    {
    
    id:'m3',
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]


    const ContextProvider = ({ children }) => {
        const [CartEl,setCartItem]=useState(cartElements);
        const updatedCartItem=[...CartEl];


        const CartElementHandler=(product)=>{
            let updatedItem;
            let index=CartEl.findIndex((add)=> add.id===product.id);
            const indexItem=CartEl[index];
            if(indexItem){
                updatedItem={...product,quantity:(indexItem.quantity)+1}
                updatedCartItem[index]=updatedItem;
                setCartItem([...updatedCartItem])
                return;
            }

            setCartItem([...updatedCartItem,{...product,quantity:1}])
        }











        return (
          <CartContext.Provider value={{ 
            cartElements:CartEl,
            CartElementHandler:CartElementHandler
          }}>
            {children}
          </CartContext.Provider>
        );
      }

export default ContextProvider