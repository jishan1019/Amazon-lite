import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props)
    const { img, name, seller, quantity, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product__info'>
                <h4 className='product__name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='add__to__card__btn'>Add To Cart</button>
        </div>
    );
};

export default Product;