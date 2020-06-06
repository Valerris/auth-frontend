import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./ProductItems.module.css";

const productItems = ({ products }) => {
	const productsList = (
		<ul className={classes.ProductItems}>
			{products.map((product) => (
				<ProductItem key={product._id} product={product} />
			))}
		</ul>
	);

	return productsList;
};

export default productItems;
