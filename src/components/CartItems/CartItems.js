import React from "react";
import CartItem from "./CartItem/CartItem";
import totalPrices from "../../utils/totalPrices";
import classes from "./CartItems.module.css";

const cartItems = ({ products, add, remove }) => {
	// let total = 0;

	// Object.keys(totalPrices).forEach((el) => {
	// 	total += +el * totalPrices[+el];
	// });

	const UI = (
		<ul className={classes.CartItems}>
			{products.map((product) => (
				<CartItem
					key={product._id}
					product={product}
					add={add}
					remove={remove}
				/>
			))}
			{/* <p>Итого: {`${total} ₽`}</p> */}
		</ul>
	);

	return UI;
};

export default cartItems;
