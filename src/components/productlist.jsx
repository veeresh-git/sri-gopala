import React,{Component} from 'react';
import {Product} from './product'
import './productsgrid.css'

export const Productlist=(props)=>{

return(<div className="prod-grid">
{
    props.products.map(producte=>(<Product key={producte.id} name={producte.name} price={producte.price}/>))
}

</div>)
}
