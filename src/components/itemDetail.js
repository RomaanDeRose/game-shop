import "./itemDetail.css";
import ItemCount from "./itemCount";

const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetail">
      <img src={item.imageURL} alt="juego" className="itemDetail-img" />
      <div className="itemDetail-text">
        <h2 className="itemDetail-text--title">{item.title}</h2>
        <p className="itemDetail-text--description">{item.description}</p>
        <span className="itemDetail-text--buy">${item.price}</span>
        <ItemCount stock={6} />
      </div>
    </div>
  );
};

export default ItemDetail;
