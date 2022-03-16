import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemsByCategory } from "../api/api";
import ItemList from "./itemList";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryGame } = useParams();

  useEffect(() => {
    getItemsByCategory(categoryGame)
      .then((snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [categoryGame]);

  return (
    <div className="itemListContainer">
      <h2 className="containerTitle">{greeting}</h2>
      {products.length > 0 ? (
        <ItemList products={products} />
      ) : (
        <div className="text-loading"></div>
      )}
    </div>
  );
};

export default ItemListContainer;
