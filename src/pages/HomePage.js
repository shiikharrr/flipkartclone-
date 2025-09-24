import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const { addToCart, removeFromCart, cart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const getQty = (product) => {
        const item = cart.find(i => i.id === product.id);
        return item ? item.qty : 0;
    };

    return (
        <div style={{ padding: 20 }}>
            <h1>Apni Dukan</h1>
            <h2>Products</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(product => (
                    <div key={product.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 200 }}>
                        <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
                        <h4>{product.title}</h4>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product)}>+</button>
                        <span style={{ margin: '0 10px' }}>{getQty(product)}</span>
                        <button onClick={() => removeFromCart(product)}>-</button>
                    </div>
                ))}
            </div>
        </div>
    );
}