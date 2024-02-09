import React, { useState } from 'react'
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
    async function  fetchMovieHandler(){
        setIsLoading(true);
        const response=await fetch('https://swapi.dev/api/films');
       const data= await response.json();
       const transformedMovie=data.results.map((movieData)=>{
        return {
            id:movieData.episode_id,
            title:movieData.title,
            openingText:movieData.opening_crawl,
            releaseDate:movieData.release_date
        }
       })
       setIsLoading(false);
       setMovies(transformedMovie);
    }
  return (
   <>
        <section className={classes.HomeCompContainerbtn}>
            <button  onClick={fetchMovieHandler}>Fetch Movie</button>
        </section>
        <section className={classes.HomeCompContainer}>
            {isLoading && <h1>Loading....</h1>}
            {!isLoading &&
            movies.map(item=><li className={classes.MovieItem}>
                <h1>{item.title}</h1>
                <p>{item.openingText}</p>
                </li>)
                }
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