import "./itemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { getItems } from "../api/api";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { DB } from "../firebase";

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

  useEffect(() => {
    const itemColecction = collection(DB, "items");
    getDocs(itemColecction)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(items);
      })
      .catch((err) => {
        console.log(err);
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
    </div>
  );
};

export default ItemListContainer;
