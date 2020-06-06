import React, { useEffect } from "react";
import ProductItems from "../../components/ProductItems/ProductItems";

const Products = (props) => {
	// useEffect();

	const products = [
		{
			id: 1,
			name: "Продукт 1",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda a, totam porro doloribus aut magnam incidunt, et temporibus architecto nesciunt eveniet. Veritatis consequuntur dolorum est ipsum explicabo expedita iusto eius facere! Accusamus quo saepe eum labore ab maiores, voluptatum officia id nemo quaerat distinctio optio molestias cupiditate qui magni quam?",
			price: 11.11,
		},
		{
			id: 2,
			name: "Продукт 2",
			description: "Описание продукта",
			price: 22.22,
		},
		{
			id: 3,
			name: "Продукт 3",
			description: "Описание продукта",
			price: 3.3,
		},
		{
			id: 4,
			name: "Продукт 4",
			description: "Описание продукта",
			price: 3.3,
		},
		{
			id: 5,
			name: "Продукт 5",
			description: "Описание продукта",
			price: 3.3,
		},
		{
			id: 6,
			name: "Продукт 6",
			description: "Описание продукта",
			price: 3.3,
		},
	];

	return (
		<div>
			<h1>Каталог продуктов</h1>
			<ProductItems products={products} />
		</div>
	);
};

export default Products;
