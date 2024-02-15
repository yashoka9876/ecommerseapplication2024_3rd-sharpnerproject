import React, { useContext } from 'react';
import classes from './Productss.module.css'
import CartContext from '../store/createContext';
import { Link } from 'react-router-dom';
export const productsArr = [
    {
    id:'m1',
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    reviews:[
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5, review: 'A classic novel with vivid characters and beautiful prose.' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 5, review: 'A timeless masterpiece that addresses important themes.' },
        { id: 3, title: '1984', author: 'George Orwell', rating: 4.8, review: 'A thought-provoking dystopian novel with powerful political commentary.' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.7, review: 'A charming romance with memorable characters and witty dialogue.' },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2, review: 'A coming-of-age novel that captures the angst of adolescence.' }
      ]
    
    },
    
    {
    id:'m2',
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    reviews:[
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5, review: 'A classic novel with vivid characters and beautiful prose.' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 5, review: 'A timeless masterpiece that addresses important themes.' },
        { id: 3, title: '1984', author: 'George Orwell', rating: 4.8, review: 'A thought-provoking dystopian novel with powerful political commentary.' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.7, review: 'A charming romance with memorable characters and witty dialogue.' },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2, review: 'A coming-of-age novel that captures the angst of adolescence.' }
      ]
    
    },
    
    {
    
    id:'m3',

    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    reviews:[
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5, review: 'A classic novel with vivid characters and beautiful prose.' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 5, review: 'A timeless masterpiece that addresses important themes.' },
        { id: 3, title: '1984', author: 'George Orwell', rating: 4.8, review: 'A thought-provoking dystopian novel with powerful political commentary.' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.7, review: 'A charming romance with memorable characters and witty dialogue.' },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2, review: 'A coming-of-age novel that captures the angst of adolescence.' }
      ]
    
    },
    
    {
    
    id:'m4',
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

    reviews:[
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', rating: 4.5, review: 'A classic novel with vivid characters and beautiful prose.' },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', rating: 5, review: 'A timeless masterpiece that addresses important themes.' },
        { id: 3, title: '1984', author: 'George Orwell', rating: 4.8, review: 'A thought-provoking dystopian novel with powerful political commentary.' },
        { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', rating: 4.7, review: 'A charming romance with memorable characters and witty dialogue.' },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', rating: 4.2, review: 'A coming-of-age novel that captures the angst of adolescence.' }
      ]
    
    }
    
    ]


    
    const Productss = () => {

       const CTX= useContext(CartContext)


      return (
        <div className={classes.container}>
            <ul className={classes.UoList}>
        {
            productsArr.map(item=><Link to={`${item.id}`} className={classes.list} key={item.id}>
                <div>
                    <p>{item.title}</p>
                    <img src={item.imageUrl} alt='food images' />
                </div>
                <div className={classes.description}>
                    <span>{item.price}$</span>
                    <button className={classes.listButton} onClick={()=>CTX.CartElementHandler({
                        ...item
                    })}>Add to cart</button>
                </div>
            </Link>)
        }
</ul>
        </div>
      )
    }
    
    export default Productss