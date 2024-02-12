import React, { useRef } from 'react';
import classes from './Contect.module.css';
const Contect = () => {
    const title=useRef();
    const email=useRef();
    const number=useRef();
    async function formHandler(event){
        event.preventDefault();
        const obj={
            title:title.current.value,
            email:email.current.value,
            number:number.current.value
        }
        const response=await fetch('https://sharpnerhttp-default-rtdb.firebaseio.com/AUTH.json',{
            method:"POST",
            body:JSON.stringify(obj),
            'Content-Type':'application/json'
        })
        const data=await response.json();
        console.log(data);
        title.current.value='';
        email.current.value='';
        number.current.value='';
        

    }
  return (
    <section  className={classes.HomeCompContainer}>
    <form onSubmit={formHandler}>
    <div className={classes.InputDiv}>
        <label>Name</label>
        <input
        ref={title}
        type='text'></input>
    </div>
    <div className={classes.InputDiv} >
        <label>Email</label>
        <input
        type='email'
        ref={email}
        id="paragraphInput" name="paragraphInput" rows="4" cols="50"></input>
    </div>
    <div className={classes.InputDiv}> 
        <label>Mobile No..</label>
        <input
        ref={number}
        type='tel'></input>
    </div>
    <button className={classes.FormBtn}>Add Movie</button>
    </form>
</section>
  )
}

export default Contect