import "./itemListContainer.css";
import { useState, useEffect } from "react";
import ItemCount from "./itemCount";
import ItemList from "./itemList";
import { getItems } from "../api/api";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItems().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className="itemListContainer">
      <h2 className="containerTitle">{greeting}</h2>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p className="text-loading">Cargando...</p>
      )}
      <ItemCount stock={8} />
    </div>
  );
};

export default ItemListContainer;
