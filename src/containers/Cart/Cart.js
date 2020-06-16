import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	getCart,
	addCartItem,
	removeCartItem,
} from "../../store/actions/index";
import CartItems from "../../components/CartItems/CartItems";

const Cart = () => {
	const { token } = useSelector((state) => state.auth);
	const { products } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCart(token));
	}, [dispatch, token]);

	const addItem = (id) => {
		dispatch(addCartItem(token, id));
	};

	const removeItem = (id) => {
		dispatch(removeCartItem(token, id));
	};

	const UI = (
		<div>
			<h1>Корзина</h1>
			{products.length > 0 ? (
				<CartItems
					products={products}
					add={addItem}
					remove={removeItem}
				/>
			) : (
				<p>Пусто ;(</p>
			)}
		</div>
	);

	return UI;
};

export default Cart;
