import React from 'react';
import "./Card.css"

const Card = (props) => {
    const { cart } = props;

    let total = 0;
    let totalShiping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShiping = totalShiping + product.shipping;
    }

    const tax = total * 7 / 100

    return (
        <div className=''>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Prise: ${total} </p>
            <p>Shiping Prise Prise: ${totalShiping}</p>
            <p>Tax: ${tax}</p>
            <p>Gand Total: </p>
        </div>
    );
};

export default Card;