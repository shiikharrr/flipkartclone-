import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    return (
        <nav style={{ display: "flex", gap: 20, padding: 20, background: "#eee" }}>
            <Link to="/" style={{ marginRight: 20 }}>Home</Link>
            <Link to="/cart">Cart ({totalItems})</Link>
        </nav>
    );
}