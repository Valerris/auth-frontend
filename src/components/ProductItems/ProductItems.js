import React from "react";
import ProductItem from "./ProductItem/ProductItem";

const productItems = ({ products }) => {
	const productsList = (
		<ul>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);

	return productsList;
};

export default productItems;
