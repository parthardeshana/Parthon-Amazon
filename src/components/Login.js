import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => history.push("/"))
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) history.push("/");
			})
			.catch((error) => alert(error.message));
	};
	return (
		<div className="container my-5">
			<div className="w-25 m-auto">
				<div className="mb-3">
					<h2 className="text-center">Parthon Shopping</h2>
				</div>
				<div className="mb-3">
					<h6 className="text-center">Log In</h6>
				</div>
				<div className="mb-3">
					<input
						type="email"
						className="form-control"
						placeholder="name@example.com"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className="form-control"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<button
						onClick={signIn}
						type="submit"
						className="btn btn-warning  w-100"
					>
						Sign in
					</button>
				</div>
				<div>
					<p className="mb-0" style={{ fontSize: "12px" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
						impedit.
					</p>
				</div>
				<div className="mb-3">
					<button
						onClick={register}
						type="submit"
						className="btn btn-primary w-100"
					>
						Sign up with parthon
					</button>
				</div>
			</div>
		</div>
	);
}

export default Login;
