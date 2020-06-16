import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductItems/ProductCard/ProductCard";
import Modal from "../../../components/UI/Modal/Modal";
import {
	getProduct,
	addCartItem,
} from "../../../store/actions/index";

const Product = () => {
	const [showModal, toggleShowModal] = useState(false);
	const { token } = useSelector((state) => state.auth);
	const { product, loading } = useSelector((state) => state.products);
	const dispatch = useDispatch();

	const { id } = useParams();

	useEffect(() => {
		dispatch(getProduct(token, id));
	}, [dispatch, token, id]);

	const addItem = (id) => {
		dispatch(addCartItem(token, id));
		toggleModal();
	};

	const toggleModal = () => {
		toggleShowModal(() => !showModal);
	};

	const UI = loading ? (
		<p>Загрузка...</p>
	) : (
		product && (
			<div>
				<h1>{product.name}</h1>
				<ProductCard product={product} add={addItem} />
				{showModal && (
					<Modal title={product.name} clicked={toggleModal}>
						Продукт добавлен в корзину
					</Modal>
				)}
			</div>
		)
	);

	return UI;
};

export default Product;
