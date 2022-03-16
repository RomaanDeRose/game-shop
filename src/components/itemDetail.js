import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/cartContext";
import ItemCount from "./itemCount";
import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  const { imageURL, title, description, price } = item;
  const [showButton, setShowButton] = useState(false);
  const { addToCart } = useContext(CartContext);

  const onAddItem = (cantidad) => {
    addToCart(cantidad, item);
    setShowButton(true);
  };

  return (
    <div className="itemDetail">
      <img src={imageURL} alt="juego" className="itemDetail-img" />
      <div className="itemDetail-text">
        <h2 className="itemDetail-text--title">{title}</h2>
        <p className="itemDetail-text--description">{description}</p>
        <span className="itemDetail-text--buy">${price}</span>
        {!showButton ? (
          <ItemCount stock={8} initial={1} onAdd={onAddItem} />
        ) : (
          <Link to="/cart" className="link-cart">
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            Ir al carrito
          </Link>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default ItemDetail;
