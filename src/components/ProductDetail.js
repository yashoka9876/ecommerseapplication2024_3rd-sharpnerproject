import React from 'react'
import { productsArr } from './Productss'
import { useParams } from 'react-router-dom';
import classes from './ProductDetail.module.css'
function getItem(id){
  
    return productsArr.find(item => item.id === id);

}

const ProductDetail = () => {
  const params=useParams();
  let ItemObj=getItem(params.ItemId)
  
  let Reviews=ItemObj.reviews


  return (
    <>
      <div class="text-center container">
      <h1>{ItemObj.title}</h1>
      <img src={ItemObj.imageUrl} class="rounded w-25 h-25" alt="..."/>
      <div className={classes.Prizee}>
        <p>Prize</p>
        <p>${ItemObj.price}</p>
      </div>
    </div>
    <div  class="text-center container">
      <h1>reviews</h1>
      <ul>
        {
          Reviews.map((obj)=>{ return <li className={classes.list}>
            {
              obj.review
            }
          </li>})
        }
      </ul>
    </div>
    </>
  )
}

export default ProductDetail