import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../api/api";
import ItemDetail from "./itemDetail";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [prodDetail, setProdDetail] = useState([]);
  const { prodId } = useParams();

  useEffect(() => {
    getItems().then((items) => {
      const item = items.find((item) => item.id === parseInt(prodId));
      setProdDetail(item);
    });
  }, [prodId]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail item={prodDetail} />
    </div>
  );
};

export default ItemDetailContainer;
