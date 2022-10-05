import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-danger text-light">
			<div className="container-fluid">
				<Link to="/">
					<div className="navbar-brand">
      					<img src={logoimagen} height="50" className="d-inline-block align-text-top" />
    				</div>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      				<span className="navbar-toggler-icon"></span>
    			</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Nosotros</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Pizzas</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active">Contacto</a>
						</li>
					</ul>
				</div>	
			</div>	
		</nav>
	);
};
