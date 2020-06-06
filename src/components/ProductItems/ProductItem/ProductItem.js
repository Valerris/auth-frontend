import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";
import config from "../../../config/config";
import testImg from "./testimg.jpg";

const productItem = ({ product }) => {
	const productItem = (
		<li className={classes.product__item}>
			<Link
				className={classes.product__link}
				to={config.server_url + "/" + product._id}
			>
				<div className={classes.product__item__media}>
					<img src={testImg} alt="" />
				</div>
				<div className={classes.product__item__info}>
					<div className={classes.product__item__name}>
						{product.name}
					</div>
					<div className={classes.product__item__description}>
						{product.description}
					</div>
					<div className={classes.product__item__more}>Подробнее</div>
				</div>
			</Link>
		</li>
	);

	return productItem;
};

export default productItem;
