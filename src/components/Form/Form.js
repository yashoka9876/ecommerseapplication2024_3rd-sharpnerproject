import React, { useRef } from 'react'
import classes from './Form.module.css'
const Form = () => {
    const title=useRef();
    const textarea=useRef();
    const date=useRef();
    async function formHandler(event){
        event.preventDefault();
        let movie={
            title:title.current.value,
            openingText:textarea.current.value,
            releaseDate:date.current.value
        }
        const response=await fetch('https://sharpnerhttp-default-rtdb.firebaseio.com/movies.json',{
            method:"POST",
            body:JSON.stringify(movie),
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
                <textarea
                ref={textarea}
                id="paragraphInput" name="paragraphInput" rows="4" cols="50"></textarea>
            </div>
            <div className={classes.InputDiv}> 
                <label>release_date</label>
                <input
                ref={date}
                type='date'></input>
            </div>
            <button className={classes.FormBtn}>Add Movie</button>
            </form>
        </section>
  )
}

export default Form