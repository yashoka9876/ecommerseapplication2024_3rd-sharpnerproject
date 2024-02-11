/* eslint-disable no-restricted-globals */
import React, { useCallback, useEffect, useState } from 'react'
import classes from './HomeComp.module.css'
import Form from '../Form/Form';
const Ticket=[
    {
        date:'july 16',
        state:'TORONTO,ON',
        type:'DTE ENERGY MUSIC THEATRE'
    },
    {
        date:'july 17',
        state:'TORONTO,ON',
        type:'DTE ENERGY MUSIC THEATRE'
    },
    {
        date:'july 18',
        state:'TORONTO,ON',
        type:'DTE ENERGY MUSIC THEATRE'
    },
    {
        date:'july 19',
        state:'TORONTO,ON',
        type:'DTE ENERGY MUSIC THEATRE'
    },
    {
        date:'july 20',
        state:'TORONTO,ON',
        type:'DTE ENERGY MUSIC THEATRE'
    },
    {
        date:'july 21',
        state:'TORONTO,ON',
        type:'DTE ENERGY MUSIC THEATRE'
    }
]

const HomeComp = () => {
    const [movies,setMovies]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState(null)

    const fetchMovieHandler=useCallback(async function (){
        try{
            setIsLoading(true);
        const response=await fetch('https://sharpnerhttp-default-rtdb.firebaseio.com/movies.json');
        if(!response.ok){
            throw new Error('Something went wrong brother')
        }
       const data= await response.json();

       const loadedMovies=[];

       for(const key in data){
            loadedMovies.push({
                id:key,
                title:data[key].title,
                openingText:data[key].openingText,
                releaseDate:data[key].releaseDate
            })
       }
       
       setError(false)
       setMovies(loadedMovies);
    }catch(error){
        setError(error.message)
    }
    setIsLoading(false);
          
    },[]);

    async function deleteHandler(id) {
        console.log(id);
        try {
            const response = await fetch(`https://sharpnerhttp-default-rtdb.firebaseio.com/movies/${id}.json`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            const data = await response.json();
            //Here this pop up will generate 

            window.alert("Item Deleted succesfully");
                location.reload()
            

            // Automatically close the alert after 5 seconds




            console.log(data);
        } catch (error) {
            console.error('Error deleting item:', error.message);
        }
    }

    useEffect(()=>{
        fetchMovieHandler()
    },[])
  return (
   <>
        <Form/>
        <section className={classes.HomeCompContainerbtn}>
            <button  onClick={fetchMovieHandler}>Fetch Movie</button>
        </section>
        <section className={classes.HomeCompContainer}>
            {isLoading && movies.length>=0 &&<h1 className={classes.MovieItem}>Loading....</h1>}
            {!isLoading && movies.length===0 && !error && <p className={classes.MovieItem}>found no movie</p>}
            {!isLoading &&
            movies.map(item=><li className={classes.MovieItem}>
                <h1>{item.title}</h1>
                <p>{item.openingText}</p>
                <div>
                    <button onClick={()=>deleteHandler(item.id)}>DeleteMovie</button>
                </div>
                </li>)
                }
            {!isLoading && error && <h1 className={classes.MovieItem}>{error}</h1>}
        </section>
         <section className={classes.HomeCompContainer}>
        <ul>
            {
               Ticket.map((item)=><li className={classes.tourItem}>
                <span className={classes.tourDate}>{item.date}</span>
                <span className={classes.tourPlace}>{item.state}</span>
                <span className={classes.tourSpecPlace}>{item.type}</span>
                <button>Buy Ticket</button>
               </li>) 
            }
        </ul>
    </section>
    
   </>
    
  )
}

export default HomeComp