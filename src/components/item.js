import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ item }) => {
  const { id, imageURL, title, price } = item;

  return (
    <div className="item-card">
      <Link to={`/item/${id}`}>
        <img src={imageURL} alt={`game-${title}`} className="item-card-img" />
        <p className="item-card-title">{title}</p>
        <p className="item-card-price">${price}</p>
      </Link>
    </div>
  );
};

export default Item;
