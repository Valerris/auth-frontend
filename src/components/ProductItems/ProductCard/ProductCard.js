import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import totalPrices from "../../../utils/totalPrices";
import config from "../../../config/config.js";
import classes from "./ProductCard.module.css";

const ProductCard = ({
	product,
	add,
	sizeSelected,
	colorSelected,
	setSizeSelected,
}) => {
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

	const sizeSelection = (e) => {
		setSizeSelected(e.target.value);
	};

	const UI = product && (
		<div id={product._id} className={classes.ProductCard}>
			{/* <div className={classes.ProductCard__media}> */}
			{product.images && (
				<Slider {...settings}>
					{product.images.map((el) => (
						<img src={config.server_url + el} alt={product.name} />
					))}
				</Slider>
			)}
			{/* </div> */}
			<div className={classes.ProductCard__info}>
				<div className={classes.ProductCard__name}>
					{product.name}
				</div>
				<div
					className={classes.ProductCard__description}
					dangerouslySetInnerHTML={{ __html: product.description }}
				>
					{/* {product.description} */}
				</div>
				<div className={classes.ProductCard__field}>
					<div className={classes.ProductCard__price}>
						<p>Цена</p>
						{!sizeSelected
							? product.prices[Object.keys(product.prices)[0]]
							: product.prices[sizeSelected]}{" "}
						₽
					</div>
					<div>
						<Input
							config={{
								name: "select",
								type: "select",
							}}
							label={{ name: "Размер" }}
							selected={sizeSelected}
							options={Object.keys(product.prices).map((el) => ({
								name: el,
								value: el,
							}))}
							changed={sizeSelection}
						/>
					</div>
				</div>
				<Button
					type="submit"
					className={["form__button"]}
					clicked={() => {
						add(product._id);
						// totalPrices[+price] += 1;
					}}
				>
					В корзину
				</Button>
			</div>
		</div>
	);

	return UI;
};

export default ProductCard;
