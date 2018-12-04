import React from 'react';
import './Product.css';
import './ProductPrice.css';
import './ProductName.css';

const Product = ({name, price})=>(
    <div className="Product">
        <span className="ProductName">{name}</span>
        <span className="ProductPrice">{price}</span>
    </div>
)

export default Product;