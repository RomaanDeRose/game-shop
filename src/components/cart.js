import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";
import { Toaster } from "react-hot-toast";
import { collection, addDoc } from "firebase/firestore";
import { DB } from "../firebase";
import CartItem from "./cartItem";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, showTotal } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [orderID, setOrderID] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);

  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = showTotal();
    if (![name, phone, email].some((text) => text.trim() === "")) {
      const itemCollection = collection(DB, "orders");
      const newItem = {
        buyer: { name, phone, email },
        items: [...cart],
        date: new Date().toString(36),
        total: totalPrice,
      };
      addDoc(itemCollection, newItem)
        .then((item) => setOrderID(item.id))
        .catch((err) => console.log(err));
    }
    clearCart();
  };

  return (
    <div className="cart">
      <h2 className="cart-title">Carrito</h2>
      <div className="cart-container">
        {cart.length === 0 && orderID === false ? (
          <p className="noProducts">No hay productos en el carrito...</p>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      {cart.length > 0 && orderID === false && (
        <div className="cart-order">
          <p className="cart-totalPrice">
            Total: <span>${showTotal()}</span>
          </p>
          {/* <button>Comprar</button> */}
          <button onClick={clearCart}>Borrar carrito</button>
          <form className="form" onSubmit={handleSubmit}>
            <h2>Completa tus datos!</h2>
            <input
              value={name}
              type="text"
              placeholder="Nombre..."
              onChange={handleNameChange}
              required
            />
            <input
              value={phone}
              type="number"
              placeholder="Teléfono..."
              onChange={handlePhoneChange}
              required
            />
            <input
              value={email}
              type="email"
              placeholder="Email..."
              onChange={handleEmailChange}
              required
            />
            <input type="submit" value="Comprar" />
          </form>
        </div>
      )}
      {orderID && (
        <>
          <p className="order-msg">
            Compra existosa! Puedes seguir el envío con el siguiente ID:{" "}
          </p>
          <span className="order-msg--id">{orderID}</span>
          <Link to="/">
            <button>
              <FontAwesomeIcon className="icon-home" icon={faHome} /> Volver al
              Inicio
            </button>
          </Link>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default Cart;
