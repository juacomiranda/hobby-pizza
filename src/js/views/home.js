import React from "react";
import "../../styles/home.css";
import imagenHome from "../../img/tomates_cherry.jpeg"

export const Home = () => (
	<div className="container-fluid p-0">
		<img src={imagenHome} className="img-fluid" alt="..." />
		<div className="container bg-secondary text-light rounded mt-5">
			<div className="row justify-content-evenly">
				<img className="col-4" src="https://cdn0.iconfinder.com/data/icons/brain-activity-flat-style/150/thinking-512.png" alt="..." />
				<p className="col-4 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>		
		</div>
		<div className="container bg-secondary text-light rounded mt-5">
			<div className="row justify-content-evenly">
				<p className="col-4 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
				<img className="col-4" src="https://cdn0.iconfinder.com/data/icons/brain-activity-flat-style/150/thinking-512.png" alt="..." />
			</div>		
		</div>
		<div className="container bg-secondary text-light rounded mt-5">
			<div className="row justify-content-evenly">
				<img className="col-4" src="https://cdn0.iconfinder.com/data/icons/brain-activity-flat-style/150/thinking-512.png" alt="..." />
				<p className="col-4 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
			</div>		
		</div>
	</div>	
);
