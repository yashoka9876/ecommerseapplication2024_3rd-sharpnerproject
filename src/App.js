import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import RootLayout from "./pages/RootLayout";
import Contects from "./pages/Contect";
import StoreItem from "./pages/StoreItem";
import AuthForm from './components/Authentication/AuthForm';



function App() {
  const router=createBrowserRouter([
    {path:'',element:<RootLayout/>,
    children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'login',element:<AuthForm/>},
      {path:'store',
      element:<Store/>,
      loader:()=>{
        if(!localStorage.getItem('token')){
          console.log("i this this one is working")
          return redirect('/login')
        }else{
          console.log('Hai this one is here');
          return null;
        }
      }
      },
      {path:'/store/:ItemId',element:<StoreItem/>},
      {path:'contect',element:<Contects/>}
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
