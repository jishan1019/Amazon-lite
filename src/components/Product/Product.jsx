import React from 'react';
import "./Product.css"

const Product = (props) => {
    const { img, name, seller, quantity, price, ratings } = props.product;
    const handelAddToCart = props.handelAddToCart;


    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product__info'>
                <h4 className='product__name'>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button onClick={() => handelAddToCart(props.product)} className='add__to__card__btn'>Add To Cart</button>
        </div>
    );
};

export default Product;