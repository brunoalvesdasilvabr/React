import React from 'react';
import Proptypes from 'prop-types';
import './CartHeader.css';
import './CartTitle.css';
import './CartTotal.css';

const CartHeader = ({title,total})=>(
    <div className="CartHeader">
        <h1 className="CartTitle">{title}</h1>
        <span className="CartTotal">{total}</span>
    </div>
)

export default CartHeader;

CartHeader.proptypes = {
    title:Proptypes.string,
    total:Proptypes.number
};