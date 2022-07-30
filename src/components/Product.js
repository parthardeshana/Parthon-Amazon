import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/ProductActions";

function Product({ image, rating, title, price, id }) {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.allProducts);
	const addCart = (ID) => {
		let filteredProduct = product.filter((e) => e.id === ID);
		dispatch(addToCart(filteredProduct));
	};

	return (
		<>
			<div
				className="card my-2 pb-3 rounded shadow-lg align-items-center justify-content-center"
				style={{ height: "370px" }}
			>
				<div className="card-body w-100 justify-content-center py-0 pt-3">
					<h6 className="card-title">{title} </h6>
					<div className="my-1">
						{[...Array(rating)].map((e, index) => (
							<StarIcon key={index} className="text-warning" />
						))}
					</div>
					<p className="fw-bold mb-1">$ {price}</p>
				</div>
				<img
					src={image}
					className="py-2 w-auto"
					style={{ height: "160px" }}
					alt="product iamge"
				/>
				<a onClick={() => addCart(id)} className="btn btn-primary px-5">
					Add to cart
				</a>
			</div>
		</>
	);
}

export default Product;
