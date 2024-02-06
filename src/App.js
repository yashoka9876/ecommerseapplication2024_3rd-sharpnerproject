import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Productss from "./components/Productss";
import Header from "./components/header/Headers";


function App() {
  const [cartItem,setCartItem]=useState(true)

  const handleCartItem=()=>{
    setCartItem((item)=>!item);
  }

  return (
    <>
    <Header  onHandleCartItem={handleCartItem} />
    <Productss/>
    { cartItem && <Cart/>}
    </>
  );
}

export default App;
