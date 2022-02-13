import React, { useState } from "react";
import "./itemCount.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemCount = ({ stock }) => {
  const [sumProd, setSumProd] = useState(0);

  const addProd = () => {
    if (sumProd < stock) {
      setSumProd(sumProd + 1);
    }
  };

  const removeProd = () => {
    if (sumProd > 0) {
      setSumProd(sumProd - 1);
    }
  };

  const onAdd = () => {
    console.log("Producto agregado!");
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
      <button className="button-buy" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
