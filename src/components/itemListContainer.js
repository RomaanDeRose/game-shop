import "./itemListContainer.css";
import ItemCount from "./itemCount";

const ItemListContainer = ({ greeting }) => {
	return (
		<div>
			<h2 className="containerTitle">{greeting}</h2>
			<ItemCount stock={32} />
		</div>
	);
};

export default ItemListContainer;
