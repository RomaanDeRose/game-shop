import Item from "./item";
import "./itemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemList;
