import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const productItem = ({ product }) => {
	const productItem = (
		<li className={classes.product__item}>
			<Link className={classes.product__link} to={product.href}>
				{product.name}
			</Link>
		</li>
	);

	return productItem;
};

export default productItem;
