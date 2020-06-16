import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import totalPrices from "../../../utils/totalPrices";
import classes from "./ProductCard.module.css";
import testImg from "../testimg.jpg";

const prices = {
	"150": "930.00",
	"170": "1020.00",
	"200": "1200.00",
};

const ProductCard = ({ product, add }) => {
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

	const [price, setPrice] = useState("930.00");

	const sizeSelection = (e) => {
		console.log(totalPrices);

		setPrice(() => prices[e.target.value]);
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
				<div className={classes.ProductCard__field}>
					<div className={classes.ProductCard__price}>
						<p>Цена</p>
						{price} ₽
					</div>
					<div>
						<Input
							config={{
								name: "select",
								type: "select",
							}}
							label={{ name: "Размер" }}
							options={[
								{
									value: "150",
									name: "150x150",
								},
								{
									value: "170",
									name: "170x170",
								},
								{
									value: "200",
									name: "200x200",
								},
							]}
							changed={sizeSelection}
						/>
					</div>
				</div>
				<Button
					type="submit"
					className={["form__button"]}
					clicked={() => {
						add(product._id);
						totalPrices[+price] += 1;
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
