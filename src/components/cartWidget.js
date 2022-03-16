import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { showItems } = useContext(CartContext);

  return (
    <div className="container-cart">
      <FontAwesomeIcon icon={faShoppingCart} className="cartLogo" />
      {/* <span className="cartCount">{showItems()}</span> */}
      {showItems() > 0 ? (
        <span className="cartCount">{showItems()}</span>
      ) : null}
    </div>
  );
};

export default CartWidget;
