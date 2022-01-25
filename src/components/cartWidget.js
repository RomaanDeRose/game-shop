import "./cartWidget.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
	return (
		<div className="container-cart">
			<FontAwesomeIcon icon={faShoppingCart} className="cartLogo" />
			<span className="cartCount">0</span>
		</div>
	);
};

export default CartWidget;
