import ItemDetail from "./itemDetail";
import "./itemDetailContainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { getItems } from "../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

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
      <Link to="/">
        <button>
          <FontAwesomeIcon className="icon-home" icon={faHome} /> Volver al
          Inicio
        </button>
      </Link>
      <ItemDetail item={prodDetail} />
    </div>
  );
};

export default ItemDetailContainer;
