import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/ProductActions";
import StarIcon from "@material-ui/icons/Star";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
	const cart = useSelector((state) => state.cart);
	console.log("cartt >>>", cart);
	return (
		<>
			{cart.length > 0 ? (
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							{cart.map((product) => (
								<CheckoutProduct
									image={product.image}
									rating={3}
									price={product.price}
									title={product.title}
									id={product.id}
								/>
							))}
						</div>
						<div className="col-lg-6">checkout page</div>
					</div>
				</div>
			) : (
				<div>
					{console.log("cart is empty")}
					<h4 className="text-dark text-center mt-5"> cart is Empty</h4>
				</div>
			)}
		</>
	);
}

export default Checkout;
