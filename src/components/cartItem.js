import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import "./cartItem.css";

const CartItem = ({ item }) => {
  const { clearItem } = useContext(CartContext);

  const toastRemoveProduct = () =>
    toast.error("Producto eliminado!", {
      duration: 1000,
      style: {
        backgroundColor: "#ff6a00",
        color: "#081722",
        padding: "1.1rem",
        fontWeight: "500",
        borderRadius: "16px",
        fontSize: "1.5rem",
      },
    });

  return (
    <div className="cartItem">
      <h2>{item.title}</h2>
      <p>
        Cantidad: <span>{item.cantidad}</span>
      </p>
      <p>
        Precio: <span>${item.cantidad * item.price}</span>
      </p>
      <FontAwesomeIcon
        icon={faTrash}
        className="icon-remove"
        onClick={() => {
          clearItem(item.id);
          toastRemoveProduct();
        }}
      />
    </div>
  );
};

export default CartItem;
