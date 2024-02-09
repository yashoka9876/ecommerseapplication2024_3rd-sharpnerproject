import React from 'react'
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
  return (
    <section className={classes.HomeCompContainer}>
        <ul>
            {
               Ticket.map((item)=><li className={classes.tourItem}>
                <span className={classes.tourDate}>{item.date}</span>
                <span className={classes.tourPlace}>{item.state}</span>
                <span className={classes.tourSpecPlace}>{item.type}</span>
                <button>'Buy Ticket'</button>
               </li>) 
            }
        </ul>
    </section>
  )
}

export default HomeComp