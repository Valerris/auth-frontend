import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItems from "../../components/ProductItems/ProductItems";
import { getProducts } from "../../store/actions/index";

const Products = (props) => {
	const { token } = useSelector((state) => state.auth);
	const { products } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(token));
	}, [dispatch, token]);

	return (
		<div>
			<h1>Каталог продуктов</h1>
			<ProductItems products={products} />
		</div>
	);
};

export default Products;
