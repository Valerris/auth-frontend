import React, { useEffect } from "react";
import ProductItems from "../../components/ProductItems/ProductItems";

const Products = (props) => {
	// useEffect();

	const products = [
		{
			id: 1,
			name: "Product 1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a, totam porro doloribus aut magnam incidunt, et temporibus architecto nesciunt eveniet. Veritatis consequuntur dolorum est ipsum explicabo expedita iusto eius facere! Accusamus quo saepe eum labore ab maiores, voluptatum officia id nemo quaerat distinctio optio molestias cupiditate qui magni quam?",
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
