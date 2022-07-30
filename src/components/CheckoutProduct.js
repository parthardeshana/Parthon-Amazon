import React from "react";
import { useSelector, useDispatch } from "react-redux";
import StarIcon from "@material-ui/icons/Star";
import { addToCart } from "../redux/actions/ProductActions";
import { removeProduct } from "../redux/actions/ProductActions";
import DeleteIcon from "@material-ui/icons/Delete";

function CheckoutProduct({ image, rating, title, price, id }) {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.allProducts);
	const deleteProduct = (ID) => {
		console.log("delete product nu :>>>", ID);
		dispatch(removeProduct(ID));
	};
	return (
		<>
			<div className="card d-flex m-2 pb-3 rounded shadow-lg px-3 justify-content-around">
				<div className="row">
					<div className="col-lg-6">
						<div>
							<h6 className="card-title">{title} </h6>
							<div className="my-1">
								{[...Array(rating)].map((e, index) => (
									<StarIcon key={index} className="text-warning" />
								))}
							</div>
							<p className="fw-bold mb-1">$ {price}</p>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="text-center">
							<img
								src={image}
								className="py-2 w-auto d-block m-auto"
								style={{ height: "160px" }}
								alt="product image"
							/>
							<div>
								{/* <a onClick={() => addCart(id)} className="btn btn-primary px-5">
									Add to cart
								</a> */}
								<a
									onClick={() => deleteProduct(id)}
									className="btn btn-danger px-5"
								>
									<DeleteIcon /> Remove
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default CheckoutProduct;
