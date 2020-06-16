import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./CartItem.module.css";

const cartItem = ({ product, add, remove }) => {
	const UI = (
		<li id={product._id} className={classes.cart__item}>
			<div className={classes.cart__item__info}>
				<div className={classes.cart__item__name}>
					{product.productId.name}
				</div>
				<div className={classes.cart__item__description}>
					{`Количество: ${product.quantity}`}
				</div>
			</div>
			<div className={classes.cart__item__ctrls}>
				<Button
					className={["button--plus"]}
					type="button"
					clicked={() => {
						add(product.productId._id);
					}}
				></Button>
				<Button
					className={["button--minus"]}
					type="button"
					clicked={() => {
						remove(product.productId._id);
					}}
				></Button>
			</div>
		</li>
	);

	return UI;
};

export default cartItem;
