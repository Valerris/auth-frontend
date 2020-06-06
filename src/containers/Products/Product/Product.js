import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductItems/ProductCard/ProductCard";
import { getProduct } from "../../../store/actions/index";

const Product = () => {
	const { token } = useSelector((state) => state.auth);
	const { product, loading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const { id } = useParams();

	useEffect(() => {
		dispatch(getProduct(token, id));
	}, [dispatch, token, id]);

	const UI = loading ? (
		<p>Загрузка...</p>
	) : (
		product && (
			<div>
				<h1>{product.name}</h1>
				<ProductCard product={product} />
			</div>
		)
	);

	return UI;
};

export default Product;
