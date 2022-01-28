import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./itemCount.css";

const ItemCount = ({ stock }) => {
	const [sumProd, setSumProd] = useState(0);

	const addProd = () => {
		if (sumProd < stock) {
			setSumProd(sumProd + 1);
		} else {
			setSumProd(sumProd);
		}
	};

	const removeProd = () => {
		if (sumProd > 0) {
			setSumProd(sumProd - 1);
		} else {
			setSumProd(sumProd);
		}
	};

	return (
		<div className="itemCount-container">
			<h3 className="itemCount__title">FIFA 22</h3>
			<div className="itemCount-prodCant">
				<FontAwesomeIcon
					icon={faMinus}
					className="itemCount__icon"
					onClick={removeProd}
				/>
				<span>{sumProd}</span>
				<FontAwesomeIcon
					icon={faPlus}
					className="itemCount__icon"
					onClick={addProd}
				/>
			</div>
			<button>Agregar al carrito</button>
		</div>
	);
};

export default ItemCount;
