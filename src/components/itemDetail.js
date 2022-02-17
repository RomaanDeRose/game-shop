import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./itemDetail.css";
import ItemCount from "./itemCount";

const ItemDetail = ({ item }) => {
  const [SumProdCount, setSumProdCount] = useState(undefined);

  const onAddItem = (newSumProd) => {
    setSumProdCount(newSumProd);
  };

  return (
    <div className="itemDetail">
      <img src={item.imageURL} alt="juego" className="itemDetail-img" />
      <div className="itemDetail-text">
        <h2 className="itemDetail-text--title">{item.title}</h2>
        <p className="itemDetail-text--description">{item.description}</p>
        <span className="itemDetail-text--buy">${item.price}</span>
        {!SumProdCount ? (
          <ItemCount stock={8} initial={1} onAdd={onAddItem} />
        ) : (
          <Link to="/cart">Ir al carrito</Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
