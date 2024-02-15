import React, {useState } from "react"

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    email:'',
    login:()=>{},
    logout:()=>{}
})

//chote veer this one is nother but component here whcih you will 
//return here to overlap <App/> component

export const AuthContextProvider = (props)=>{
    const [token,setToken]=useState(localStorage.getItem('token'));
    const [email,setEmail]=useState(localStorage.getItem('email'));

    const userIsLoggedIn=!!token;

    const loginHandler = (token,email)=>{
        localStorage.setItem('token',token);
        localStorage.setItem('email',email);
        setToken(token);
        setEmail(email);
    }

    const logoutHandler= ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('email')
        setToken(null);
        setEmail(null);
    }

    // setTimeout(logoutHandler,5000)
    

    return <AuthContext.Provider value={{
        token:token,
        isLoggedIn:userIsLoggedIn,
        email:email,
        login:loginHandler,
        logout:logoutHandler
    }}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;