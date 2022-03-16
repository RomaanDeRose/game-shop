import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { doc, getDoc } from "firebase/firestore";
import { DB } from "../firebase";
import ItemDetail from "./itemDetail";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
  const [prodDetail, setProdDetail] = useState([]);
  const { prodId } = useParams();

  useEffect(() => {
    const itemRef = doc(DB, "items", prodId);
    getDoc(itemRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProdDetail({ id: snapshot.id, ...snapshot.data() });
        }
      })
      .catch((err) => {
        console.log(err);
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
      {prodDetail.length === 0 ? (
        <div className="text-loading"></div>
      ) : (
        <ItemDetail item={prodDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
