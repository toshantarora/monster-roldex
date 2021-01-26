import React from 'react';
import './card.styles.css';
export const Card = props => (
<div className='card-container'>
  <img  alt = 'monster' src={`https://robohash.org/${props.product.id}?set=set2`}></img>
    <h2> {props.product.name} </h2>
    <p> {props.product.email} </p>
    <p>{props.product.username} </p> 
</div>
);
