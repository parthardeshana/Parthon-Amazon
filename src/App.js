import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { user } from "./redux/actions/ProductActions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		// dispatch();
		auth.onAuthStateChanged((authUser) => {
			console.log("THE USER IS >>>>> ", authUser);
			if (authUser) {
				dispatch(user(authUser));
			} else {
				dispatch(user(null));
			}
		});
	}, []);
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/" exact>
						<Header />
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header />
						<Checkout />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
