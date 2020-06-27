import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import config from "../../config/config";
import classes from "./Calc.module.css";

const Calc = (props) => {
	let [sizes, setSizes] = useState(null);
	// let [sizeSelected, setSizeSelected] = useState("");
	// let [colorSelected, setColorSelected] = useState("");
	let [products, setProducts] = useState(null);
	let [btnClicked, setBtnClicked] = useState(false);

	const fetchPds = () => {
		if (!props.sizeSelected) return console.log("No size selected.");

		const searchStr = `?size=${props.sizeSelected}&color=${props.colorSelected}&material=${props.materialSelected}`;

		fetch(config.server_url + "size" + searchStr)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				setProducts(data);
			});

		setBtnClicked(true);
	};

	useEffect(() => {
		fetch(config.server_url + "sizes", {})
			.then((response) => response.json())
			.then((data) => {
				const sizes = Object.keys(data.sizes).map((el) => {
					if (el.charAt(0) !== "D") {
						return {
							name: "Габаритный размер - " + el,
							value: el,
						};
					} else {
						return {
							name: "Диаметр - " + el,
							value: el,
						};
					}
				});

				sizes.unshift({
					name: "Выберите габаритный размер",
					value: "",
				});

				setSizes(sizes);
			});

		if (props.sizeSelected) fetchPds();
	}, []);

	const UI = (
		<div>
			<h1>Прайс лист.</h1>
			<div
				style={{
					margin: "0 0 2.5rem",
				}}
			>
				<div
					style={{
						margin: "0 0 1.25rem",
					}}
				>
					<div
						style={{
							margin: "0 0 0.75rem",
						}}
					>
						{sizes && (
							<Input
								config={{
									name: "selectSize",
									type: "select",
								}}
								label={{ name: "Габаритный размер" }}
								selected={props.sizeSelected}
								options={sizes}
								changed={function (e) {
									setBtnClicked(false);
									// setSizeSelected(e.target.value);
									props.setSizeSelected(e.target.value);
								}}
							/>
						)}
					</div>
					<div
						style={{
							margin: "0 0 0.75rem",
						}}
					>
						<Input
							config={{
								name: "selectColor",
								type: "select",
							}}
							label={{ name: "Цвет" }}
							selected={props.colorSelected}
							options={[
								{
									name: "Выберите цвет",
									value: "",
								},
								{
									name: "Белый",
									value: "белый",
								},
								{
									name: "Медный",
									value: "медный",
								},
								{
									name: "Серебряный",
									value: "серебряный",
								},
								{
									name: "Золотистый",
									value: "золотистый",
								},
							]}
							changed={function (e) {
								// setBtnClicked(false);
								// setColorSelected(e.target.value);
								props.setColorSelected(e.target.value);
							}}
						/>
					</div>
					<div>
						<Input
							config={{
								name: "selectMaterial",
								type: "select",
							}}
							label={{ name: "Материал" }}
							selected={props.materialSelected}
							options={[
								{
									name: "Выберите цвет",
									value: "",
								},
								{
									name: "Пластмасса",
									value: "пластмасса",
								},
								{
									name: "Сталь",
									value: "сталь",
								},
							]}
							changed={function (e) {
								// setBtnClicked(false);
								// setColorSelected(e.target.value);
								props.setMaterialSelected(e.target.value);
							}}
						/>
					</div>
				</div>
				<div>
					<Button
						style={{
							fontSize: "0.85rem",
							lineHeight: "1rem",
							minHeight: "auto",
							borderRadius: "0.125rem",
						}}
						type="submit"
						clicked={(e) => {
							fetchPds();
						}}
					>
						Найти
					</Button>
				</div>
			</div>
			{btnClicked &&
			(props.sizeSelected ||
				props.colorSelected ||
				props.materialSelected) ? (
				<h5>
					Список товаров{" "}
					{props.sizeSelected && `c размером ${props.sizeSelected}`}{" "}
					{props.colorSelected && `, цветом ${props.colorSelected}`}{" "}
					{props.materialSelected &&
						`, материалом ${props.materialSelected}`}
					:
				</h5>
			) : (
				<p>Вы ничего не выбрали</p>
			)}
			<ul className={classes.CalcItems}>
				{btnClicked &&
					products &&
					products.map((el) => (
						<li key={el.productId._id} className={classes.calc__item}>
							<Link
								className={classes.calc__item__info}
								to={`/products/product/${el.productId._id}`}
							>
								<div className={classes.calc__item__name}>
									{el.productId.name}
								</div>
								<div className={classes.calc__item__description}>
									Цена: {el.price} ₽
								</div>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);

	return UI;
};

export default Calc;
