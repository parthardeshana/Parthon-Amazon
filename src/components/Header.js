import React from "react";
import BrandLogo from "../images/brand-logo.png";
import "./Header.css";
import { useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

function Header() {
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);
	console.log("user >>>> ", user);
	const authenticationhandler = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header px-3">
			<div className="brand_logo">
				<Link to="/">
					<img src={BrandLogo} />
				</Link>
			</div>
			<div className="header_search">
				<input
					type="text"
					className="header_searchinput"
					placeholder="Search products here"
				/>
				<SearchIcon className="header_search_icon" />
			</div>
			<div className="header_nav">
				<div className="header_option">
					<span className="header_optionOne">
						Hello {user ? user?.bc?.email : "Guest"}
						{/* Hello {user ? "User1" : "Guest"} */}
						{/* Hello Guest */}
					</span>
					<br />
					<Link to="/login" className="text-light text-decoration-none">
						<span onClick={authenticationhandler} className="header_optionTwo">
							{user ? "sign out" : "Sign In"}
						</span>
					</Link>
				</div>
				<div className="header_option">
					<span className="header_optionOne">Returns</span>
					<br />
					<span className="header_optionTwo">& Orders</span>
				</div>
				<div className="header_option">
					<span className="header_optionOne">Your</span>
					<br />
					<span className="header_optionTwo">Prime</span>
				</div>

				<Link to="/checkout" className="text-light mt-2">
					<div className="header_optionBasket">
						<ShoppingCartIcon className="header_basket_icon" />
						<span className="header_optionTwo ">{cart.length}</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
