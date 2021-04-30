import React from "react";

//include images into your bundle
/*import rigoImage from "../../img/rigo-baby.jpg";*/

//create your first component
export function Home() {
	return (
		<div className="container col-12 d-flex">
			<div className="icono col-2">
				<i className="far fa-clock"></i>
			</div>
			<div className="quinto col-2"></div>
			<div className="cuarto col-2"></div>
			<div className="tercero col-2"></div>
			<div className="segundo col-2"></div>
			<div className="primero col-2">
				<h1>hola</h1>
			</div>
		</div>
	);
}
