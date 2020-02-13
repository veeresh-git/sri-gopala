import React,{Component} from 'react';
import './product.css'

export const Product=props=>{
    
    return(
        <div className="product-container">
        <img alt="product" src="ghee.jpg" className="product-image"></img>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <button name="Add To Cart">Add To Cart</button>
        </div>)
}
export default Product