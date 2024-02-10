import React, { useRef } from 'react'
import classes from './Form.module.css'
const Form = () => {
    const title=useRef();
    const textarea=useRef();
    const date=useRef();
    function formHandler(){
        console.log(title.current.value)
        console.log(textarea.current.value)
        console.log(date.current.value)
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
            <button>Add Movie</button>
            </form>
        </section>
  )
}

export default Form