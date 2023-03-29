import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='shop__container'>
            <div className="product__container">
                {
                    product.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="card__container">
                <h4>Order Summery</h4>
            </div>

        </div>
    );
};

export default Shop;