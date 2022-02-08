import "./itemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetail">
      <img src={item.imageURL} alt="juego" className="itemDetail-img" />
      <div className="itemDetail-text">
        <h2 className="itemDetail-text--title">{item.title}</h2>
        <p className="itemDetail-text--description">{item.description}</p>
        <span>${item.price}</span>
      </div>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
