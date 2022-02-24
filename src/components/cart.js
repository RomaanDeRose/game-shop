import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItem from "./cartItem";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="cart">
      <h2 className="cart-title">Carrito</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p className="noProducts">No hay productos en el carrito...</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <p className="cart-totalPrice">Total: ....</p>
      <button>Comprar</button>
      <button onClick={clearCart}>Borrar carrito</button>
    </div>
  );
};

export default Cart;
