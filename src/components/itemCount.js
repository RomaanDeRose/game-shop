import React, { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./itemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [sumProd, setSumProd] = useState(initial);

  const toastAddProduct = () =>
    toast.success("Producto agregado!", {
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

  const addProd = () => {
    if (sumProd < stock) {
      setSumProd(sumProd + 1);
    }
  };

  const removeProd = () => {
    if (sumProd > 1) {
      setSumProd(sumProd - 1);
    }
  };

  const addToCart = () => {
    onAdd(sumProd);
  };

  return (
    <div className="itemCount-container">
      <div className="itemCount-prodCant">
        <button className="button-cant" onClick={removeProd}>
          <FontAwesomeIcon icon={faMinus} className="itemCount__icon" />
        </button>
        <span>{sumProd}</span>
        <button className="button-cant" onClick={addProd}>
          <FontAwesomeIcon icon={faPlus} className="itemCount__icon" />
        </button>
      </div>
      <button
        className="button-buy"
        onClick={() => {
          addToCart();
          toastAddProduct();
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
