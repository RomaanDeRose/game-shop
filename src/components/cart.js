import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../context/cartContext";
import { DB } from "../firebase";
import CartItem from "./cartItem";
import "./cart.css";

const Cart = () => {
  const { cart, clearCart, showTotal } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderID, setOrderID] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);

  const handlePhoneChange = (e) => setPhone(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleConfirmEmailChange = (e) => setEmailConfirm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== emailConfirm) {
      return toast.error("Los emails no coinciden", {
        duration: 1500,
        style: {
          backgroundColor: "#ff6a00",
          color: "#081722",
          padding: "1.1rem",
          fontWeight: "600",
          borderRadius: "16px",
          fontSize: "1.6rem",
        },
      });
    } else if (![name, phone, email].some((text) => text.trim() === "")) {
      setLoading(true);
      const totalPrice = showTotal();
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
      clearCart();
    }
  };

  return (
    <div className="cart">
      <h2 className="cart-title">Carrito</h2>
      <div className="cart-container">
        {cart.length === 0 && orderID === false && loading === false ? (
          <>
            <p className="noProducts">No hay productos en el carrito...</p>
            <Link to="/">
              <button className="button">
                <FontAwesomeIcon className="icon-home" icon={faHome} /> Volver
                al Inicio
              </button>
            </Link>
          </>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      {cart.length > 0 && orderID === false && loading === false && (
        <div className="cart-order">
          <p className="cart-totalPrice">
            Total: <span>${showTotal()}</span>
          </p>
          <button
            className="button"
            onClick={() => {
              toast("Productos eliminados!", {
                duration: 1000,
                style: {
                  backgroundColor: "#ff6a00",
                  color: "#081722",
                  padding: "1.2rem",
                  fontWeight: "600",
                  borderRadius: "18px",
                  fontSize: "1.7rem",
                },
              });
              clearCart();
            }}
          >
            Borrar carrito
          </button>
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
            <input
              value={emailConfirm}
              type="email"
              placeholder="Confirma tu email..."
              onChange={handleConfirmEmailChange}
              required
            />
            <button type="submit" className="button" value="Comprar">
              Comprar
            </button>
          </form>
        </div>
      )}
      {loading && orderID === false && (
        <>
          <div className="text-loading"></div>
          <p className="loadingBuy">Generando compra...</p>
        </>
      )}
      {loading && orderID !== false && (
        <>
          <p className="order-msg">
            Compra existosa! Puedes seguir el envío con el siguiente ID:{" "}
          </p>
          <span className="order-msg--id">{orderID}</span>
          <Link to="/">
            <button className="button">
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
