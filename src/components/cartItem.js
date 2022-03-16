import { useContext } from "react";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";
import "./cartItem.css";

const CartItem = ({ item }) => {
  const { id, title, cantidad, price } = item;
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
      <h2>{title}</h2>
      <p>
        Cantidad: <span>{cantidad}</span>
      </p>
      <p>
        Precio: <span>${cantidad * price}</span>
      </p>
      <FontAwesomeIcon
        icon={faTrash}
        className="icon-remove"
        onClick={() => {
          clearItem(id);
          toastRemoveProduct();
        }}
      />
    </div>
  );
};

export default CartItem;
