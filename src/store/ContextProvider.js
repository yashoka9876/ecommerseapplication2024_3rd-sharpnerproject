
import React, { useContext, useState } from 'react'
import CartContext from './createContext'
import AuthContext from './auth-context';
import axios from 'axios';



// export const cartElements = [

//     {
//     id:'m1',
    
//     title: 'Colors',
    
//     price: 100,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
//     quantity: 2,
    
//     },
    
//     {
//     id:'m2',
    
//     title: 'Black and white Colors',
    
//     price: 50,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
//     quantity: 3,
    
//     },
    
//     {
    
//     id:'m3',
    
//     title: 'Yellow and Black Colors',
    
//     price: 70,
    
//     imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
//     quantity: 1,
    
//     }
    
//     ]
function PostApi(email,cartData){

  axios.post(`https://crudcrud.com/api/7bc712cc6fb14e6bb9c577f00eb34932/Cart${email.replace(/[@.]/g, '')}`,{...cartData})
  .then(res=> {
    if(res.ok){
      return res.json()
    }else{
      return console.error('Failed to store item')
    }
  })
  .then(data=>console.log(data))
  .catch(err=>console.log('Error',err))
}

    const ContextProvider = ({ children }) => {
        const [CartEl,setCartItem]=useState([]);
        const updatedCartItem=[...CartEl];

       const Ctx= useContext(AuthContext)
       
      


        const CartElementHandler=(product)=>{
            let updatedItem;
            let index=CartEl.findIndex((add)=> add.id===product.id);
            const indexItem=CartEl[index];
            if(indexItem){
                updatedItem={...product,quantity:(indexItem.quantity)+1}
                updatedCartItem[index]=updatedItem;

                PostApi(Ctx.email,updatedItem)
                setCartItem([...updatedCartItem])
                return;
            }
            PostApi(Ctx.email,{...product,quantity:1});
            setCartItem([...updatedCartItem,{...product,quantity:1}])
        }

        const setCartHandler=(arrayobj)=>{
          setCartItem([...arrayobj]);
        }











        return (
          <CartContext.Provider value={{ 
            cartElements:CartEl,
            CartElementHandler:CartElementHandler,
            setCartHandler:setCartHandler
          }}>
            {children}
          </CartContext.Provider>
        );
      }

export default ContextProvider