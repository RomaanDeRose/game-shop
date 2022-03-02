import "./itemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./itemList";
import { getItemsByCategory } from "../api/api";
import { useParams } from "react-router-dom";
// import { getDocs, collection } from "firebase/firestore";
// import { DB } from "../firebase";

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

  // useEffect(() => {
  //   getItems().then((res) => {
  //     if (!categoryGame) {
  //       setProducts(res);
  //     } else {
  //       const filterCategory = res.filter(
  //         (item) => item.category === categoryGame
  //       );
  //       setProducts(filterCategory);
  //     }
  //   });
  // }, [categoryGame]);

  // useEffect(() => {
  //   const itemCollection = collection(DB, "items");
  //   getDocs(itemCollection)
  //     .then((snapshot) => {
  //       const items = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setProducts(items);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

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
