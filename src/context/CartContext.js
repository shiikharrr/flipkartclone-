import React, { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart(prev =>
            prev.find(item => item.id === product.id && item.qty > 1)
                ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
                : [...prev, { ...product, qty: 1 }]
        );
    };
    const removeFromCart = (product) => {
    setCart(prev =>
      prev.find(item => item.id === product.id && item.qty > 1)
        ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty - 1 } : item)
        : prev.filter(item => item.id !== product.id)
    );
  };
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
            </CartContext.Provider>
    );
}   
export function useCart() {
    return React.useContext(CartContext);
}
