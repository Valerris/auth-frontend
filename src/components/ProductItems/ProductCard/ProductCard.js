import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./ProductCard.module.css";
import testImg from "../testimg.jpg";

const ProductCard = ({ product }) => {
	var settings = {
		dots: true,
		autoplay: true,
		arrows: false,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	const UI = product && (
		<div id={product._id} className={classes.ProductCard}>
			{/* <div className={classes.ProductCard__media}> */}
			<Slider {...settings}>
				<img src={testImg} alt="" />
				<img src={testImg} alt="" />
				<img src={testImg} alt="" />
			</Slider>
			{/* </div> */}
			<div className={classes.ProductCard__info}>
				<div className={classes.ProductCard__name}>
					{product.name}
				</div>
				<div className={classes.ProductCard__description}>
					{product.description}
				</div>
				<div className={classes.ProductCard__price}>
					{product.price} ₽
				</div>
			</div>
		</div>
	);

	return UI;
};

export default ProductCard;
