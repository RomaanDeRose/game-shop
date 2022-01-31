import "./item.css";

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageURL} alt="producto" className="item-card-img" />
      <p className="item-card-title">{item.title}</p>
      <p className="item-card-price">${item.price}</p>
      <button className="item-card-button">comprar</button>
    </div>
  );
};

export default Item;
