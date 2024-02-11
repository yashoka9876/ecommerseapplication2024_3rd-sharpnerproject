import React, { useRef } from 'react';
import classes from './Contect.module.css';
const Contect = () => {
    const title=useRef();
    const email=useRef();
    const number=useRef();
    async function formHandler(event){
        event.preventDefault();
        let obj={
            title,
            email,
            number
        }
        const response=await fetch('https://sharpnerhttp-default-rtdb.firebaseio.com/movies.json',{
            method:"POST",
            body:JSON.stringify(obj),
            'Content-Type':'application/json'
        })
        const data=await response.json();
        console.log(data);
    }
  return (
    <section  className={classes.HomeCompContainer}>
    <form onSubmit={formHandler}>
    <div className={classes.InputDiv}>
        <label>Title</label>
        <input
        ref={title}
        type='text'></input>
    </div>
    <div className={classes.InputDiv} >
        <label>Opening Text</label>
        <input
        type='email'
        ref={email}
        id="paragraphInput" name="paragraphInput" rows="4" cols="50"></input>
    </div>
    <div className={classes.InputDiv}> 
        <label>release_date</label>
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