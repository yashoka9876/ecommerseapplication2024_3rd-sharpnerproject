import React from 'react'
import classes from './Headers.module.css'
const Header = (props) => {
  return (
   <header className={classes.header}>
         <ul className={classes.container}>
            <li>Home</li>
            <li>Store</li>
            <li>About</li>
            <div className={classes.button}>
                <button onClick={()=>props.onHandleCartItem()}>cart</button>
            </div>
         </ul>
   </header>
  )
}

export default Header