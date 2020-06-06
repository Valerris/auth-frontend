import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import testImg from "../testimg.jpg";
import truncateText from "../../../utils/truncateText";

const productItem = ({ product }) => {
	const productItem = (
		<li id={product._id} className={classes.product__item}>
			<Link
				className={classes.product__link}
				to={`/products/product/${product._id}`}
			>
				<div className={classes.product__item__media}>
					<img src={testImg} alt="" />
				</div>
				<div className={classes.product__item__info}>
					<div className={classes.product__item__name}>
						{product.name}
					</div>
					<div className={classes.product__item__description}>
						{truncateText(product.description, 45)}
					</div>
					<div className={classes.product__item__more}>Подробнее</div>
				</div>
			</Link>
		</li>
	);

	return productItem;
};

export default productItem;
