import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Productss from "./components/Productss";
import Header from "./components/header/Headers";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import RootLayout from "./pages/RootLayout";
import Contect from "./pages/Contect";


function App() {
  
  const router=createBrowserRouter([
    {path:'',element:<RootLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'store',element:<Store/>},
      {path:'contect',element:<Contect/>}
    ]
    },
  ])

 
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
