import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductItems from "../../components/ProductItems/ProductItems";
import { getProducts } from "../../store/actions/index";

const Products = (props) => {
	const { token } = useSelector((state) => state.auth);
	const { products, loading } = useSelector(
		(state) => state.products
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProducts(token));
	}, [dispatch, token]);

	const UI = (
		<div>
			<h1>Каталог продуктов</h1>
			{loading ? (
				<p>Загрузка...</p>
			) : (
				<ProductItems products={products} />
			)}
		</div>
	);

	return UI;
};

export default Products;
