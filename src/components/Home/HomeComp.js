import React, { useEffect, useState } from 'react'
import classes from './HomeComp.module.css'
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

    async function  fetchMovieHandler(){
        try{
            setIsLoading(true);
        const response=await fetch('https://swapi.dev/api/films');
        if(!response.ok){
            throw new Error('Something went wrong brother')
        }
       const data= await response.json();
       const transformedMovie=data.results.map((movieData)=>{
        return {
            id:movieData.episode_id,
            title:movieData.title,
            openingText:movieData.opening_crawl,
            releaseDate:movieData.release_date
        }
       })
       setError(false)
       setMovies(transformedMovie);
    }catch(error){
        setError(error.message)
    }
    setIsLoading(false);
          
    }

    useEffect(()=>{
        fetchMovieHandler()
    },[])
  return (
   <>
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