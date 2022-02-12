import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <Link to={`/product/${item.id}`}>
        <img src={item.imageURL} alt="producto" className="item-card-img" />
        <p className="item-card-title">{item.title}</p>
        <p className="item-card-price">${item.price}</p>
      </Link>
    </div>
  );
};

export default Item;
