import { useCart } from "../context/CartContext";

export default function CartPage() {
    const {cart, addToCart, removeFromCart} = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    return (
        <div style={{ padding: 20 }}>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id} style={{ marginBottom: 10 }}>
                        {item.title} - ${item.price} x {item.qty}
                        <button onClick={() => addToCart(item)} style={{ marginLeft: 10 }}>+</button>
                        <button onClick={() => removeFromCart(item)} style={{ marginLeft: 5 }}>-</button>
                    </li>
                ))}
            </ul>
            <p>Total Items: {totalItems}</p>
            <button disabled={cart.length === 0}>Checkout</button>
        </div>
    );
}
