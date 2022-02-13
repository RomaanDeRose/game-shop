import "./itemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { getItems } from "../api/api";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryGame } = useParams();

  useEffect(() => {
    getItems().then((res) => {
      if (!categoryGame) {
        setProducts(res);
      } else {
        const filterCategory = res.filter(
          (item) => item.category === categoryGame
        );
        setProducts(filterCategory);
      }
    });
  }, [categoryGame]);

  return (
    <div className="itemListContainer">
      <h2 className="containerTitle">{greeting}</h2>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <p className="text-loading">Cargando...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
