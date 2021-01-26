import React from 'react';
import { Card } from '../Card/card.component';

import './cardList.styles.css';
export const CardList = (props) => {
    return (
        <div className = 'card-list'>{props.product.map(product => <Card key={product.id} product= {product}/>)}</div>
    )
}