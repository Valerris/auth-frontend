import React, { useEffect } from "react";
import ProductItems from "../../components/ProductItems/ProductItems";

const Products = (props) => {
	// useEffect();

	const products = [
		{
			id: 1,
			name: "Product 1",
			description: "Product description",
			price: 11.11,
		},
		{
			id: 2,
			name: "Product 1",
			description: "Product description",
			price: 22.22,
		},
		{
			id: 3,
			name: "Product 1",
			description: "Product description",
			price: 3.3,
		},
	];

	return <ProductItems products={products} />;
	// return <p>ProductItems there...</p>;
};

export default Products;
