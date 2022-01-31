import "./itemList.css";
import Item from "./item";

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
