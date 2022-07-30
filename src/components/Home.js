import React, { useEffect, useState } from "react";
import HomeBackground from "../images/home_background.jpeg";
import "./Home.css";
import Product from "./Product";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../redux/actions/ProductActions";
import CircularProgress from "@material-ui/core/CircularProgress";

function Home() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);

	const getProducts = async () => {
		await axios.get("https://fakestoreapi.com/products").then((res) => {
			setIsLoading(false);
			dispatch(setProducts(res.data));
		});
	};
	useEffect(() => {
		getProducts();
	});

	const products = useSelector((state) => state.allProducts);

	return isLoading ? (
		<div className="justify-content-center align-items-center d-flex vh-100">
			<CircularProgress color="secondary" />
		</div>
	) : (
		<div className="home">
			<div className="home_container">
				<img src={HomeBackground} className="home_image" />
				<div className="container">
					<div className="home_row row">
						{products.slice(0, 2).map((product, index) => (
							<div key={index} className="col-lg-6 col-12">
								<Product
									image={product.image}
									rating={3}
									price={product.price}
									title={product.title}
									id={product.id}
								/>
							</div>
						))}
					</div>
					<div className="home_row row">
						{products.slice(2, 8).map((product, index) => (
							<div key={index} className="col-lg-4 col-6">
								<Product
									image={product.image}
									rating={3}
									price={product.price}
									title={product.title}
									id={product.id}
								/>
							</div>
						))}
					</div>
					<div className="home_row row">
						{products.slice(8).map((product, index) => (
							<div key={index} className="col-lg-3 col-6">
								<Product
									image={product.image}
									rating={3}
									price={product.price}
									title={product.title}
									id={product.id}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
