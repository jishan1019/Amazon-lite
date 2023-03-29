import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import Product from '../../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);


    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className='shop__container'>
            <div className="product__container">
                {
                    product.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    ></Product>)
                }
            </div>
            <div className="card__container">
                <Card cart={cart}></Card>
            </div>

        </div>
    );
};

export default Shop;