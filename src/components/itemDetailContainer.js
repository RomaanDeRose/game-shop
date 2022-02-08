import { useState, useEffect } from "react";
import { getItems } from "../api/api";
import ItemDetail from "./itemDetail";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [prodDetail, setProdDetail] = useState([]);

  useEffect(() => {
    getItems().then((items) => {
      const item = items.find((item) => item.title === "FIFA 22");
      setProdDetail(item);
    });
  }, []);

  return (
    <div className="itemDetailContainer">
      <ItemDetail item={prodDetail} />
    </div>
  );
};

export default ItemDetailContainer;
