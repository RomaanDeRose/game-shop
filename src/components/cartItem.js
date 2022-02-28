import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cartItem.css";

const CartItem = ({ item }) => {
  const { clearItem } = useContext(CartContext);

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
        }}
      />
    </div>
  );
};

export default CartItem;
